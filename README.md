# FINANCE APP

## HOW TO START

Napravio sam branch s tvojim imenom pa tamo rokaj i onda prije pusha na master pullaj (dolje lijevo u VS codeu ti pise na kojem si branchu)
Prvo runnaj "npm i" u terminalu onda "npm start" da pokrenes live server

Rokas u folderima components za te male komponente, containers za spoj komponenti i assets.
U folderu gdje se nalazi komponenta mozemo staviti css/scss za to komponentu makar je bolje koristiti bootstrap classe direktno u jsxu(html, css i js u kombinaciji ovo sta vidis u return/render funkciji. )

U package.json pod dependencies mozes vidjeti sve libraryje koji su instalirani u projekt

Za CSS nemoj koristiti piksele tipa za font size i to nego rem-ove. Stavio sam da je jedan rem po defaultu 10px

## EXTENSIONS

### VS CODE

Dobri extensioni: Bracket pair colorizer (lakse vidis zagrade), ES7+ React/Redux/React-Native snippets (odmah pomocu shortcuta ti ispise komponentu bilo klasa ili funkcija), ESLint (muss, prikazuje ti errore i warningse precompilation), IntelliCode, npm, npm Intellisense, Prettier (konfiguriras, ako vec nisi da ti se na change of focus autosave i primijeni code cleanup), PowerShell, Sapling (Vidis react component tree unutar vs codea, a u chromeu mozes preko react developer tools vidjet component tree), Thunder Client (za testiranje APIja unutar VS code), vscode-icons (preglednije ikone i folderi)

### CHROME

ColorZilla (da iskopiras boju s neke druge stranice u chromeu), React Developer Tools, Redux devtools (Mozes pregledati kako se mijenja state unutar aplikacije),

## FOLDER STRUCTURE

### ASSETS

Images, videos, audios, icons, etc.

### COMPONENTS

Reusable components: navbar, buttons, forms, loading spinner

\*JEDINO KOMPONENTE, CONTAINERI I PAGES SU PRVO SLOVO VELIKO I ZA SVAKU IDUCU RIJEC (PascalCase). ostali fileovi (kebab-case), a funkcije i variable unutar fileova(camelCase), CONSTANTS (CAPITAL_CASE)

### CONTAINERS

Header, Footer, Sidebar, Topbar, Charts, Stock Info, etc.

### HOOKS

Custom hooks - this folder can also be placed closer to the components that use the custom hooks

### ROUTES

pages

### SERVICES

Authentication: Sign up, log in

### STORE

Redux - only one store

### UTILS

Reusable functions, constants

## CSS

### TAILWIND CSS

https://tailwindcss.com/

## VALIDATION AND FORMS

yup and formik libraries

## API

Axios library. Jako popularan library, bolji od Fetch Apija koji je ugradjen u browser

U api folderu napravis axios.create i exportas ga tipa (export const yahoo) i onda u fileu gdje ga koristis importas yahoo iz tog foldera i yahoo.get(...)

https://axios-http.com/docs/intro

### ICONS

react-icons
