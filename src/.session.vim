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
badd +123 components/Utility.js
badd +6 screens/Home.js
badd +102 components/ImageProcessing.js
badd +14 navigation/HomeStack.js
badd +10 components/HomeTabs.js
badd +4 styles/Colors.js
badd +52 components/Header.js
badd +75 components/CreatePDFMenu.js
badd +11 components/ImagesGrid.js
badd +6 components/AddImagePopup.js
badd +7 components/MyView.js
badd +31 components/CreationsList.js
badd +36 components/NameCreationPopup.js
badd +22 navigation/HomeTabs.js
badd +13 components/creationList/CreationMgmt.js
badd +11 components/LoadingPopup.js
badd +25 ~/.config/nvim/UltiSnips/javascript.snippets
badd +12 components/ClearAllButton.js
badd +51 screens/About.js
argglobal
%argdel
edit components/Utility.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
let s:l = 123 - ((19 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
123
normal! 028|
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
