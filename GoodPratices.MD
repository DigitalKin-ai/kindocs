# Liste des bonnes pratiques à appliquer sur le projet pour la partie Documentation

*Note: C'est pratiques peuvent évoluer en fonction des retours d'expériences de l'équipe, n'hésitez pas a remonter vos suggestions.*

## Architecture

### Dossier

- **assets**: Contient les fichiers statiques (images, fonts, etc...)
- **components**: Contient les composants réutilisables de l'application
- **css**: Contient les feuilles de style globales de l'application
- **pages**: Contient les pages de l'application
- **theme**: Contient le thème de l'application
- **services**: Contient les services de l'application

### Composition des composants

- Un composant par fichier
- Les fichiers de composants sont nommés en PascalCase
- Les fichiers de composants sont préfixés par le type de composant (ex: `AppHeader.js`)
- Les feuilles de style des composants sont nommées en camelCase et sont préfixées par le type de composant (ex: `appHeader.css`)
- Les fichiers de tests des composants sont nommés en PascalCase et sont préfixés par le type de composant (ex: `AppHeader.test.js`)
- Les composants ne contiennent pas de logique métier (ex: appels API, etc...)

```bash
└── /components
  ├── /atoms
  │   ├── styles
  │   │   ├── atomNameStyle.js
  │   │   └── atomName.css
  │   ├── AtomName.js
  │   └── AtomName.test.js
  └── /molecules
      ├── styles
      │   ├── moleculeNameStyle.js
      │   └── moleculeName.css
      ├── MoleculeName.js
      └── MoleculeName.test.js
```

### Composition des pages

- Une page par fichier
- Les pages sont une composition de composants et une mise en page
- Les fichiers de pages sont nommés en PascalCase
- Les fichiers de pages sont préfixés par le type de page (ex: `HomePage.js`)
- Les feuilles de style des pages sont nommées en camelCase et sont préfixées par le type de page (ex: `homePage.css`)
- Les pages ne contiennent pas de logique (ex: appels API, vérification de droits, comparaison de données, etc...)

```bash
└── /pages
  ├── /home
  │   ├── styles
  │   │   ├── homePageStyle.js
  │   │   └── homePage.css
  │   ├── HomePage.js
  │   └── HomePage.test.js
  └── /login
      ├── styles
      │   ├── loginPageStyle.js
      │   └── loginPage.css
      ├── LoginPage.js
      └── LoginPage.test.js
```

### Composition des services

- Un service par type de service (ex: API, Authentification, etc...)
- Les services sont des fonctions utilitaires communues à l'application (ex: appels API, etc...)
- Les fichiers de services sont nommés en camelCase
- Les fichiers de services sont préfixés par le type de service (ex: `apiService.js`)
- Les fichiers de tests des services sont nommés en camelCase et sont préfixés par le type de service (ex: `ApiService.test.js`)
- Les services ne contiennent pas de logique de stockage (ex: stockage de données dans le store, etc...)

```bash
└── /services
  ├── /api
  │   ├── apiService.test.js
  │   └── apiService.js
  ├── authService.test.js
  └── authService.js
```

### Composition des utils

- Un fichier par type d'utilitaire (ex: `index.js`, `date.js`, `string.js`, etc...)
- Les utils sont des petits services pour des tâches récurrentes (ex: manipulation de dates, manipulation de chaînes de caractères, etc...)
- Les fichiers d'utilitaires sont nommés en camelCase
- Les fichiers d'utilitaires sont préfixés par le type d'utilitaire (ex: `dateUtils.js`)
- Les fichiers de tests des utils sont nommés en camelCase et sont préfixés par le type d'utilitaire (ex: `dateUtils.test.js`)
- Les utils ne contiennent pas de logique métier (ex: appels API, etc...)

```bash
└── /utils
  ├── dateUtils.test.js
  ├── dateUtils.js
  ├── stringUtils.test.js
  └── stringUtils.js
```

## Tests

### Composition des tests

- Un fichier de test par fichier de code
- Les fichiers de tests sont nommés en PascalCase
- Les fichiers de tests sont préfixés par le type de fichier testé (ex: `AppHeader.test.js`)
- Les tests sont écrits en utilisant Vitest (https://vitest.dev/guide/)
- Les tests sont dans le même dossier que le fichier testé

## Documentation

### Composition de la documentation

- La documentation est écrite en Markdown
- La documentation est écrite en anglais
- La documentation est écrite en utilisant le format Markdown de Github (https://guides.github.com/features/mastering-markdown/)

### Composition de la documentation du code

- La documentation du code est écrite en utilisant le format JSDoc (https://jsdoc.app/)
- La documentation du code est écrite en anglais
- **La documentation du code est obligatoire avant de faire une Pull Request**

## Conventions de code

### Composition des noms de variables

- Les noms de variables sont écrits en camelCase
- Les noms de variables sont explicites
- Les noms de variables sont en anglais

### Composition des noms de fonctions

- Les noms de fonctions sont écrits en camelCase
- Les noms de fonctions sont explicites
- Les noms de fonctions sont en anglais

### Composition des noms de classes

- Les noms de classes sont écrits en PascalCase
- Les noms de classes sont explicites
- Les noms de classes sont en anglais

## Accessibilité

- Les composants sont accessibles au clavier
- Les composants sont accessibles aux lecteurs d'écran
- Les composants sont accessibles aux personnes malvoyantes
- Les composants sont accessibles aux personnes malentendantes
- Les composants sont accessibles aux personnes à mobilité réduite

```TS
// Exemple de composant accessible
<template>
  <div>
    <img :src="image" :alt="alt" />
    <input :type="type" :value="value" :placeholder="placeholder" />
    <button @click="onClick" @keydown.enter="onClick" @keydown.space="onClick">
      <slot />
    </button>
  </div>
</template>
```

## Internationalisation

- Les appels i18n sont écrits en anglais
- Les textes sont traduits en anglais
- Les textes sont traduits en français

```JS
// Exemple d'appel i18n
<template>
  <div>
    <p>{{ $t('text') }}</p>
  </div>
</template>
```

## Conventions de style

- Les feuilles de style sont écrites en css
- Les feuilles de style sont écrites en utilisant le format BEM (http://getbem.com/)
- Les feuilles de style sont écrites en anglais

## Conventions de commit et pull request

- Les messages de commit sont écrits en anglais
- Les messages de commit sont écrits en utilisant le format suivant: `type(scope): subject`

- Les pull requests sont écrites en français
- Les pull requests sont écrites en utilisant le format suivant: `type(scope): subject`
- Une pull request ne doit pas contenir plus de 500 lignes de code
- Une pull request doit contenir l'avancée du travail effectué et les points bloquants
- Une pull request doit contenir des captures d'écran de la fonctionnalité développée

### Types de commit (type) et pull request (type)

- **feat**: Ajout d'une nouvelle fonctionnalité
- **fix**: Correction d'un bug
- **docs**: Modification de la documentation
- **style**: Modification de la feuille de style
- **refactor**: Modification du code sans ajouter de fonctionnalité ou corriger un bug
- **perf**: Modification du code pour améliorer les performances
- **test**: Ajout ou modification de tests
- **build**: Modification de la configuration de build
- **ci**: Modification de la configuration de CI
- **chore**: Modification de la configuration de l'application
- **revert**: Revert d'un commit précédent

### Scopes de commit (scope) et pull request (scope)

- **classes**: Modification d'une classe
- **components**: Modification d'un composant
- **layouts**: Modification d'un layout
- **pages**: Modification d'une page
- **services**: Modification d'un service
- **store**: Modification du store
- **utils**: Modification d'un utilitaire
- **tests**: Modification d'un test
- **docs**: Modification de la documentation
- **style**: Modification de la feuille de style
- **config**: Modification de la configuration de l'application
- **build**: Modification de la configuration de build
- **ci**: Modification de la configuration de CI
- **deps**: Modification des dépendances
- **other**: Autre modification