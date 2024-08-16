![Licencia MIT](https://img.shields.io/badge/licencia-MIT-blue.svg)
![Estado del Proyecto](https://img.shields.io/badge/estado-en%20progreso-yellow.svg)
![Versión](https://img.shields.io/badge/versión-1.0.0-brightgreen.svg)

![Logo](https://ci3.googleusercontent.com/meips/ADKq_NYye8g_ty_wD0XYL2GNMoDxBRpcB02j223NEnCIKMv91C9l_5f_N3N38F6JvoVwpkLhbY7i3sp5SaEjMVRInLoayPs_bzSGaWzDMCQtt6u6_sg-WvXgzvnf_2kBi05E55G_=s0-d-e1-ft#https://d335luupugsy2.cloudfront.net/cms/files/10224/1722974906/$2rp7nct8hor)

**7 Days of Code: Día 1 - Comparación en JavaScript** es parte del desafío #7DaysOfCode de Alura Latam. 🎉

## 🚀 Descripción

En el primer día del desafío, nos centraremos en uno de los aspectos más importantes y comunes de JavaScript: la comparación de valores y el manejo de tipos. En lenguajes compilados como Java o C#, los problemas con los tipos de variables se detectan en tiempo de compilación. Sin embargo, en JavaScript, estos errores solo se revelan en tiempo de ejecución debido a su naturaleza dinámica.

Hoy aprenderás sobre los problemas que pueden surgir al comparar valores de diferentes tipos y cómo resolverlos.

## 🛠️ Problemas de Comparación en JavaScript

JavaScript realiza conversiones de tipo implícitas durante las comparaciones, lo que puede llevar a resultados inesperados. Por ejemplo:

```javascript
console.log(false == '0');          // true
console.log(null == undefined);     // true
console.log(" \t\r\n" == 0);        // true
console.log(' ' == 0);              // true
```

Puedes probar estos ejemplos en la consola de tu navegador para ver los resultados.

## 🏗️ Tu Tarea

Tu misión es reescribir el siguiente código para que imprima la información correcta, sin errores y con sentido:

```javascript
let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

if (COMPARAR numeroUn y stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}

if (COMPARAR numeroTreinta y stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}

if (COMPARAR numeroDiez y stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}
```

### 💡 Consejo

Si no estás familiarizado con editores de código como Visual Studio Code, puedes usar la consola del navegador para ejecutar el código. Solo necesitas:

1. Hacer clic derecho en cualquier página web.
2. Seleccionar "Inspeccionar" y ir a la pestaña "Consola".
3. Escribir o pegar tu código ahí.

¡Muy fácil, verdad?

### 🔍 Extra

Para profundizar más sobre operadores de comparación en JavaScript, te recomiendo leer [este artículo en Alura](https://www.alura.com.br/artigos/operadores-comparacao-javascript).

## 🙏 Agradecimientos

Este desafío forma parte de la serie #7DaysOfCode de [Alura Latam](https://www.alura.com.br/).

## 👤 Autor

Este proyecto fue creado y es mantenido por [LatinGladiador](https://github.com/LatinGladiador).

## 📜 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
