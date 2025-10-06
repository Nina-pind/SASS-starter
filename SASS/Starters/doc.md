/* ============================================================
   🧩 1. VARIABLES
   ------------------------------------------------------------
   - Les variables commencent par un $
   - Elles servent à stocker des valeurs réutilisables
   ============================================================ */
$primary-color: #3498db;
$secondary-color: #2ecc71;
$text-color: #333;
$font-stack: 'Poppins', sans-serif;
$border-radius: 8px;
$base-spacing: 16px;


/* ============================================================
   🧱 2. MIXINS
   ------------------------------------------------------------
   - Une mixin permet de réutiliser un bloc de code
   - On peut passer des paramètres avec ou sans valeurs par défaut
   ============================================================ */
@mixin flex-center($direction: row) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}

@mixin button-style($color) {
  background-color: $color;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: $border-radius;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
}


/* ============================================================
   🧬 3. EXTENDS
   ------------------------------------------------------------
   - Permet de partager un style entre plusieurs sélecteurs
   ============================================================ */
%message {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: $border-radius;
  color: $text-color;
}

.success {
  @extend %message;
  border-color: $secondary-color;
}

.error {
  @extend %message;
  border-color: red;
}


/* ============================================================
   🧮 4. OPÉRATIONS MATHÉMATIQUES
   ------------------------------------------------------------
   - SASS peut faire des calculs directement dans les propriétés
   ============================================================ */
.container {
  width: 100% - 40px;
  padding: $base-spacing / 2;
}


/* ============================================================
   🔁 5. CONDITIONS ET BOUCLES
   ------------------------------------------------------------
   - @if, @else : pour des conditions
   - @for, @each, @while : pour les boucles
   ============================================================ */
$theme: dark;

body {
  @if $theme == dark {
    background: #222;
    color: white;
  } @else {
    background: white;
    color: #222;
  }
}

/* Boucle pour générer des marges automatiquement */
@for $i from 1 through 5 {
  .m-#{$i} {
    margin: $i * 10px;
  }
}


/* ============================================================
   🧠 6. FONCTIONS PERSONNALISÉES
   ------------------------------------------------------------
   - Une fonction retourne une valeur (comme en JS)
   ============================================================ */
@function em($pixels, $base: 16) {
  @return ($pixels / $base) * 1em;
}

p {
  font-size: em(18);
}


/* ============================================================
   🌳 7. NESTING (IMBRICATION)
   ------------------------------------------------------------
   - On peut imbriquer les sélecteurs comme en HTML
   ============================================================ */
nav {
  background: $primary-color;
  padding: $base-spacing;

  ul {
    list-style: none;
    display: flex;
    gap: $base-spacing;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: gold;
    }
  }
}


/* ============================================================
   🧩 8. STRUCTURATION AVEC @use ET PARTIELS
   ------------------------------------------------------------
   - En pratique, on sépare chaque partie dans des fichiers :
       _variables.scss, _mixins.scss, _base.scss, etc.
   - Puis on les importe avec @use
   ------------------------------------------------------------
   Exemple :
   @use 'variables';
   @use 'mixins';
   ============================================================ */


/* ============================================================
   💡 9. EXEMPLE COMPLET D’UTILISATION
   ------------------------------------------------------------
   - Voici un mini design de page utilisant tout ce qu’on a vu
   ============================================================ */

body {
  font-family: $font-stack;
  margin: 0;
  line-height: 1.6;
}

header {
  @include flex-center(column);
  background: linear-gradient(135deg, $primary-color, $secondary-color);
  color: white;
  padding: $base-spacing * 2;
  text-align: center;

  h1 {
    font-size: 2em;
    margin-bottom: em(8);
  }

  p {
    opacity: 0.9;
  }
}

main {
  padding: $base-spacing * 2;

  .card {
    background: #fff;
    border-radius: $border-radius;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: $base-spacing;
    margin-bottom: $base-spacing;
    color: $text-color;

    h2 {
      margin-bottom: 10px;
      color: $primary-color;
    }

    p {
      font-size: em(16);
    }

    button {
      @include button-style($primary-color);
      margin-top: $base-spacing / 2;
    }

    &.secondary {
      button {
        @include button-style($secondary-color);
      }
    }
  }
}


/* ============================================================
   🧾 10. RÉSULTAT ATTENDU
   ------------------------------------------------------------
   Ce fichier .scss, une fois compilé, génère un fichier .css
   contenant :
   - des classes de marge automatiques (.m-1 à .m-5)
   - un header avec fond dégradé
   - des cartes avec des boutons stylés
   - des messages (.success, .error)
   ============================================================ */
