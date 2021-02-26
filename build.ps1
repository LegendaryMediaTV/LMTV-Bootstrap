Write-Host "Building BackgroundImage..."
tsc ./BackgroundImage/BackgroundImage.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building Blockquote..."
tsc ./Blockquote/Blockquote.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building Breakpoint..."
tsc ./Breakpoint/Breakpoint.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
#Write-Host "Building DatePicker..."
#tsc ./DatePicker/DatePicker.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building Demo..."
tsc ./Demo/Demo.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building Display..."
tsc ./Display/Display.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building Flipper..."
tsc ./Flipper/Flipper.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building FormGroup..."
tsc ./FormGroup/FormGroup.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building FullPage..."
tsc ./FullPage/FullPage.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building functions..."
tsc ./functions/functions.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building Icon..."
tsc ./Icon/Icon.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building InfoIcon..."
tsc ./InfoIcon/InfoIcon.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building Link..."
tsc ./Link/Link.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building ListGroup..."
tsc ./ListGroup/ListGroup.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building ScrollToTop..."
tsc ./ScrollToTop/ScrollToTop.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building Spinner..."
tsc ./Spinner/Spinner.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building VisuallyHidden..."
tsc ./VisuallyHidden/VisuallyHidden.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Building app..."
tsc ./app.js --allowJs --declaration --emitDeclarationOnly --esModuleInterop
Write-Host "Done."
