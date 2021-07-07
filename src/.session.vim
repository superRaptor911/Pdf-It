let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/program/reactnative/pdfIt/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +24 ~/program/reactnative/pdfIt/App.js
badd +95 components/Utility.js
badd +16 screens/Home.js
badd +8 components/ImageProcessing.js
badd +13 navigation/HomeStack.js
badd +10 components/HomeTabs.js
badd +4 styles/Colors.js
badd +15 components/Header.js
badd +60 components/CreatePDFMenu.js
badd +11 components/ImagesGrid.js
badd +1 components/AddImagePopup.js
badd +7 components/MyView.js
badd +62 components/CreationsList.js
badd +17 components/NameCreationPopup.js
badd +23 navigation/HomeTabs.js
argglobal
%argdel
edit components/CreationsList.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
let s:l = 58 - ((21 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
58
normal! 05|
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
