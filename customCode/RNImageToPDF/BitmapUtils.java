package com.anyline.RNImageToPDF;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.net.Uri;
import android.os.ParcelFileDescriptor;
import android.media.ExifInterface;

import com.facebook.react.bridge.ReactApplicationContext;

import java.io.ByteArrayOutputStream;
import java.io.FileDescriptor;
import java.io.IOException;

class BitmapUtils {
    static Bitmap getImageFromFile(String path, ReactApplicationContext reactContext) throws IOException {
        if (path.startsWith("content://")) {
            return getImageFromContentResolver(path, reactContext);
        }

        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inPreferredConfig = Bitmap.Config.ARGB_8888;
        return BitmapFactory.decodeFile(path, options);
    }

    private static Bitmap getImageFromContentResolver(String path, ReactApplicationContext reactContext) throws IOException {
        ParcelFileDescriptor parcelFileDescriptor = reactContext.getContentResolver().openFileDescriptor(Uri.parse(path), "r");
        FileDescriptor fileDescriptor = parcelFileDescriptor.getFileDescriptor();
        Bitmap image = BitmapFactory.decodeFileDescriptor(fileDescriptor);
        parcelFileDescriptor.close();
        return image;
    }

    static Bitmap resize(Bitmap bitmap, int maxWidth, int maxHeight) {
        if (maxWidth == 0 || maxHeight == 0) return bitmap;
        if (bitmap.getWidth() <= maxWidth && bitmap.getHeight() <= maxHeight) return bitmap;

        double aspectRatio = (double) bitmap.getHeight() / bitmap.getWidth();
        int height = Math.round(maxWidth * aspectRatio) < maxHeight ? (int) Math.round(maxWidth * aspectRatio) : maxHeight;
        int width = (int) Math.round(height / aspectRatio);

        return Bitmap.createScaledBitmap(bitmap, width, height, true);
    }

    static Bitmap compress(Bitmap bmp, int quality) throws IOException {
        if (quality <= 0 || quality >= 100) return bmp;

        ByteArrayOutputStream stream = new ByteArrayOutputStream();
        bmp.compress(Bitmap.CompressFormat.JPEG, quality, stream);
        byte[] byteArray = stream.toByteArray();
        stream.close();
        return BitmapFactory.decodeByteArray(byteArray, 0, byteArray.length);
    }

    static int getBitmapRotation(String path) {
        int rotation = 0;
        switch ( getExifOrientation(path) ) {
            case ExifInterface.ORIENTATION_ROTATE_180:
                rotation = 180;
                break;
            case ExifInterface.ORIENTATION_ROTATE_90:
                rotation = 90;
                break;
            case ExifInterface.ORIENTATION_ROTATE_270:
                rotation = 270;
                break;
        }

        return rotation;
    }

    static int getExifOrientation(String path) {
        ExifInterface exif;
        int orientation = 0;
        try {
            exif = new ExifInterface( path );
            orientation = exif.getAttributeInt( ExifInterface.TAG_ORIENTATION, 1 );
        } catch ( IOException e ) {
            e.printStackTrace();
        }

        return orientation;
    }


    static Bitmap rotate(Bitmap bitmap, float degrees) {
        Bitmap bInput, bOutput;

        Matrix matrix = new Matrix();
        matrix.setRotate(degrees);
        bOutput = Bitmap.createBitmap(bitmap, 0, 0, bitmap.getWidth(), bitmap.getHeight(), matrix, true);

        return bOutput;
    }

}
