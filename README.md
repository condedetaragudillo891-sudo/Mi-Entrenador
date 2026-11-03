# Entrenador personal

Aplicación web progresiva (PWA) en español para empezar en el gimnasio. Incluye una rutina semanal para principiantes, instrucciones de los ejercicios, cardio sugerido y un calendario con registros de ejercicios y calorías. Los datos se guardan localmente en el dispositivo.

## Probar en el ordenador

Abre `index.html` en un navegador. Para probar la instalación y el funcionamiento sin conexión, sirve esta carpeta desde un servidor local; por ejemplo, con Python:

```powershell
py -m http.server 8000
```

Después abre `http://localhost:8000`.

## Instalar en iPhone

Para instalarla como icono en la pantalla de inicio, publica estos archivos en un alojamiento web con HTTPS. Abre esa dirección con Safari en el iPhone, toca **Compartir** → **Añadir a pantalla de inicio** → **Añadir**. Se abrirá en una ventana propia y, tras la primera carga, podrá funcionar sin conexión.

No es un archivo IPA: para distribuirla desde App Store o instalarla como una aplicación nativa firmada haría falta un proyecto iOS, Xcode y el proceso de firma de Apple. Esta primera versión es una PWA y no requiere App Store.

### Publicación gratuita con GitHub Pages

El proyecto incluye un flujo de publicación automática en `.github/workflows/deploy-pages.yml`. GitHub Pages ofrece alojamiento HTTPS gratuito para repositorios públicos:

1. Crea una cuenta gratuita en GitHub si todavía no tienes una y crea un repositorio **público** nuevo.
2. Sube los archivos de este proyecto al repositorio, conservando la carpeta `.github/workflows`.
3. En GitHub, abre **Settings → Pages** y elige **GitHub Actions** como método de publicación.
4. Espera a que termine el flujo **Publish to GitHub Pages** en la pestaña **Actions**. La página te mostrará la dirección pública.
5. Abre esa dirección en Safari en el iPhone y selecciona **Compartir → Añadir a pantalla de inicio → Añadir**.

El código de una web alojada en un repositorio público puede ser visto por otras personas. No subas datos personales al repositorio. Los registros de entrenamiento y las calorías de esta aplicación no se publican: se guardan en el almacenamiento local del navegador del iPhone.

## Rutina semanal

- Lunes: pecho y tríceps.
- Martes: espalda y bíceps.
- Miércoles: recuperación.
- Jueves: piernas y glúteos.
- Viernes: hombros y core.
- Sábado y domingo: recuperación.

Cada sesión de fuerza está planteada para unos 60 minutos. El cardio recomendado dura 30 minutos adicionales y es suave o moderado. Las indicaciones son orientativas: pide ayuda para ajustar las máquinas, empieza con poco peso y detente si sientes dolor, mareo o malestar.
