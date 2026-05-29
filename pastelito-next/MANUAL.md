# 📖 Manual de Usuario — Dulces Momentos (v6.0)

> Este manual explica cómo usar todas las funciones del sistema,
> tanto para el **cliente** (público) como para el **dueño** (tú).

🌐 **URL:** [dulcesmoment0s.netlify.app](https://dulcesmoment0s.netlify.app)

---

## 📑 Índice

1. [Para el Cliente](#1-para-el-cliente)
2. [Para el Dueño: Gestionar Productos](#2-gestionar-productos)
3. [Para el Dueño: Cupones de Descuento](#3-cupones-de-descuento)
4. [Para el Dueño: Control de Stock](#4-control-de-stock)
5. [Para el Dueño: Dashboard](#5-dashboard-panel-de-control)
6. [Para el Dueño: Feedback de Clientes](#6-feedback-de-clientes)
7. [Para el Dueño: Zonas de Delivery](#7-zonas-de-delivery)
8. [Cómo Subir Cambios a Internet](#8-subir-cambios-a-internet)
9. [Desarrollo Local](#9-desarrollo-local)
10. [Solución de Problemas](#10-solución-de-problemas)

> 💡 **¿Buscas el panel visual?** Revisa la [GUIA_ADMIN.md](GUIA_ADMIN.md) para gestionar el panel admin.

---

## 1. Para el Cliente

### Hacer un pedido
1. Entra a la página web
2. Navega el menú (`/menu`) — filtra por categoría, busca en tiempo real, o cambia entre vista Grid/Lista
3. Presiona **"Agregar"** en los productos que quieras
4. Abre el carrito (flotante) y presiona **"Completar Pedido"**
5. **Paso 1 — Envío:** nombre, teléfono (validado en tiempo real), dirección (o usa el botón de geolocalizar 📍), zona, fecha y horario
6. **Paso 2 — Pago:** elige método (Yape/Plin, Efectivo, Transferencia, Tarjeta)
   - Si eliges **Tarjeta**, aparece el botón "Pagar S/ X.00 con Tarjeta" — te abre el modal seguro de Culqi
7. **Paso 3 — Revisión:** confirma datos y revisa el total
   - Si tienes **puntos 🍬**, verás el banner para canjear descuento
   - *(Opcional)* Ingresa un **código de cupón** y presiona "Aplicar"
8. Presiona **"Enviar Pedido"** para finalizar
9. Serás redirigido a `/checkout/confirm` con el estado de tu pedido

### Diseñar tu propia torta
1. Ve a `/builder`
2. Sigue los 4 pasos: Base → Relleno → Cobertura → Tamaño
3. Revisa el resumen con el precio calculado
4. Agrega tu nombre y envía por WhatsApp

### Rastrear un pedido
1. Ve a `/tracker`
2. Ingresa tu código de pedido (ej: `DM-20260219-ABCD`)
3. Verás el **estado real** de tu pedido actualizado desde la base de datos
4. La página se actualiza automáticamente cada 30 segundos
5. También puedes acceder directamente con `/tracker?code=DM-20260219-ABCD`

### Activar Notificaciones Push
1. Al entrar al sitio (después de 30 segundos), aparecerá un banner: "Activa las notificaciones"
2. Presiona **"Activar"** y acepta el permiso del navegador
3. Recibirás una notificación cuando tu pedido cambie de estado

### Programa de Puntos 🍬
- Cada pedido acumula **1 punto por cada S/ 1** gastado
- Cuando tengas **100 puntos o más**, verás el banner de canje en el Checkout
- 100 puntos = S/ 10 de descuento en tu próximo pedido

### Usar un cupón
1. En el paso 3 del checkout (Revisión), busca el campo **"Código de cupón"**
2. Escribe el código (ejemplo: `PRIMERA10`) y presiona **"Aplicar"**
3. Si es válido, verás un mensaje verde con el descuento aplicado

---

## 2. Gestionar Productos

### Archivo: `src/data/products.ts`

Cada producto tiene esta estructura en TypeScript:

```typescript
{
    id: 'pionono-choco',
    title: 'Pionono Chocolate y Frutos Rojos',
    category: 'piononos',
    price: 75.00,
    description: 'Descripción deliciosa aquí...',
    image: '/img/products/pionono-choco-frutos.jpg',
    stock: 'available',
    featured: true
}
```

### Cambiar precio
Busca el producto y cambia el valor de `price`:
```typescript
price: 80.00
```

### Agregar un producto nuevo

**Método fácil (chatbot):**
Abre el chatbot en modo admin y escribe *"Crear producto nuevo"*. Pastelito te guía paso a paso.

**Método manual (archivo):**
1. Coloca la foto en la carpeta `public/img/products/`
2. Abre `src/data/products.ts`
3. Agrega un nuevo objeto al array de productos
4. Haz rebuild: `npm run build`

### Categorías disponibles
| Categoría | Valor |
|-----------|-------|
| Piononos  | `'piononos'`  |
| Tortas    | `'tortas'`    |
| Bocaditos | `'bocaditos'` |
| Combos    | `'combos'`    |

### Crear un Combo
Agrega los campos de descuento:
```typescript
{
    id: 'combo-fiesta',
    title: 'Combo Fiesta',
    category: 'combos',
    price: 120.00,
    originalPrice: 160.00,
    savings: 'S/. 40.00',
    description: 'Lo que incluye el combo...',
    image: '/img/products/foto.jpg',
    stock: 'available',
    featured: false
}
```

### Marcar como "Más Vendido"
Cambia `featured` a `true`:
```typescript
featured: true
```

---

## 3. Cupones de Descuento

### Archivo: `src/app/checkout/page.tsx`

Los cupones están definidos como constante `COUPONS` en el archivo de checkout:

```typescript
const COUPONS = [
    { code: 'PRIMERA10', discount: 10, type: 'percent' },
    { code: 'DULCE5', discount: 5, type: 'fixed' },
    { code: 'CUMPLE20', discount: 20, type: 'percent' },
];
```

### Crear un cupón nuevo
Agrega un nuevo objeto al array:
- **code**: El código que escribe el cliente (en MAYÚSCULAS)
- **discount**: Número del descuento
- **type**: `'percent'` (porcentaje) o `'fixed'` (monto fijo en soles)

### Cupones incluidos de fábrica
| Código | Descuento | Tipo |
|--------|-----------|------|
| `PRIMERA10` | 10% | Porcentaje |
| `DULCE5` | S/5 | Fijo |
| `CUMPLE20` | 20% | Porcentaje |

---

## 4. Control de Stock

### En `src/data/products.ts`, cada producto tiene un campo `stock`:

| Valor | Efecto Visual |
|-------|--------------|
| `'available'` | Normal, sin indicador |
| `'low'` | Badge amarillo: "¡Últimas unidades!" |
| `'soldout'` | Imagen gris, overlay "AGOTADO", botón deshabilitado |

### Marcar un producto como agotado
```typescript
stock: 'soldout'
```

### Volver a ponerlo disponible
```typescript
stock: 'available'
```

---

## 5. Dashboard Pro (Panel de Control)

### Acceso
1. Ve a: `dulcesmoment0s.netlify.app/admin`
2. Ingresa tu **email y contraseña de Firebase** (configura en Firebase Console → Authentication)
3. Si aún no tienes Firebase, usa tu clave local de respaldo
4. Accederás al dashboard en `/admin/dashboard`

### Layout
El dashboard tiene un **sidebar collapsible** a la izquierda con accesos directos a cada tab y navegación rápida (Inicio, Menú, Builder, Tracker).

### 6 Tabs
| Tab | Descripción |
|-----|-------------|
| 📊 **Resumen** | KPIs financieros desde Firestore, alertas de inventario |
| 🛒 **Productos** | Grid visual, edición inline de precio, stock/featured toggle, búsqueda, filtro, formulario "Agregar Producto" |
| 📦 **Pedidos** | **Pipeline visual** de pedidos por estado (nuevo → confirmado → preparando → enviado → entregado). Cambio de estado con un clic. Indicador 🔥 Firebase / 💾 Local. Notificación por WhatsApp. |
| 🏷️ **Cupones** | Crear/eliminar cupones, toggle activo/inactivo |
| 🎨 **Tema** | 4 color pickers, dark mode, galería de presets, **preview en vivo** |
| 📈 **Analytics** | Comparación semanal (barras), hora pico, mejor día, Top 5 productos |

### Gestión visual de productos (Tab Productos)
- Clic en el **precio** de cualquier producto → edítalo inline
- Botón 📦 → cambiar stock (disponible/agotado)
- Botón ⭐ → destacar/quitar destacado
- Botón 🗑️ → eliminar (con confirmación)
- Botón **"+ Agregar"** → formulario con nombre, categoría, precio, descripción

### Gestión de cupones (Tab Cupones)
- **"+ Nuevo Cupón"** → código, descuento, tipo (% o fijo)
- **Switch** para activar/desactivar cada cupón
- Botón 🗑️ para eliminar

### Editor de tema (Tab Tema)
- **Preview en vivo**: mini storefront que se actualiza en tiempo real
- **4 color pickers**: primario, secundario, acento, fondo
- **Dark mode** toggle
- **Presets rápidos**: galería de temas pre-diseñados
- Botón **restaurar** para volver al tema original

### Chatbot en modo Admin (God Mode v3.0)
El chatbot Pastelito cambia automáticamente a **modo CEO** cuando estás en el dashboard. **El modo admin ya no se pierde al navegar** a `/menu`, `/builder`, etc.

**Finanzas clásicas:**
- 💰 Ver ventas totales
- 📉 Rentabilidad y márgenes
- 🇵🇪 Cálculo de IGV (SUNAT)
- 🔮 Proyección mensual
- 📦 Estado de inventario

**Analytics v2.0:**
- *"¿Cómo van las ventas esta semana?"* → Comparación semanal
- *"¿Cuál es mi hora pico?"* → Hora con más ventas
- *"¿Qué día vendo más?"* → Mejor día de la semana

**Wizards (creación guiada):**
- *"Crear producto nuevo"* → Wizard paso a paso
- *"Crear cupón"* → Código → Descuento → Tipo
- *"Agregar zona"* → Nombre → Precio delivery
- *"Crear banner"* → Texto → Link

**Alertas:** Al abrir el chat, te avisa de stock bajo, caída de ventas y fechas cercanas.

**Memoria (v3.0):** Pastelito recuerda el último producto mencionado. Di *"sube el precio a 20"* después de preguntar por un producto y aplicará al correcto.

**Smart Fallback:** Si no entiende, sugiere comandos similares automáticamente.

**CEO Inteligente v3.0 (🆕):**
- *"Dame un reporte"* → Informe ejecutivo completo (ventas, ranking, anomalías, sugerencias)
- *"¿Qué se vende más?"* → Ranking de productos por ventas
- *"¿Hay alertas?"* → Detección de anomalías en las ventas
- *"¿Cómo puedo mejorar?"* → Sugerencias accionables basadas en datos
- *"¿Cuánto voy a vender mañana?"* → Predicción de demanda
- *"Exportar datos"* → Descarga CSV del historial de pedidos

> 🧠 **NLP local v6.0:** El motor NLP es puramente simbólico y corre 100% sin APIs externas. Entiende intenciones naturales en español con más de 30 categorías de acciones.

### Nuevo: Calendario de Disponibilidad (v6.0)
El chatbot admin puede bloquear fechas enteras:
- *"Bloquea el 15 de marzo"* → esa fecha aparece deshabilitada en el Checkout
- *"Desbloquea el 15 de marzo"* → disponible nuevamente

### Nuevo: Loose Search (v6.0)
Si no entiende algo en modo cliente, el bot busca en el catálogo y sugiere:
```
¿Quizás buscabas Torta de Chocolate?
```

### Cambiar la contraseña admin
El login ahora usa Firebase Authentication (ver TUTORIAL_SETUP.md §3).

### Borrar datos
Los datos se guardan en el navegador (localStorage). Cada navegador/dispositivo tiene sus propios datos.

---

## 6. Feedback de Clientes

### Acceso
`dulcesmoment0s.netlify.app/feedback`

### Cómo usarlo
Después de entregar un pedido, envía el link al cliente por WhatsApp:
```
¡Hola! Gracias por tu pedido 🎂
¿Nos ayudas con 30 segundos de tu tiempo?
👉 dulcesmoment0s.netlify.app/feedback
```

El cliente:
1. Califica con estrellas (1 a 5)
2. Selecciona qué pidió y si llegó a tiempo
3. Deja un comentario opcional
4. Al enviar, te llega por WhatsApp + se guarda en el Dashboard

---

## 7. Zonas de Delivery

### Editar zonas
Las zonas se configuran en `src/components/DeliveryZones.tsx`.

Cada zona es un objeto con nombre, precio y estado:
```typescript
{ name: 'Surco', price: 'Gratis', free: true }
{ name: 'Miraflores', price: 'S/. 5.00', free: false }
```

---

## 7. Web3 & PastelChain (v5.0)

Pastelito ahora incluye características experimentales de **Blockchain** para fidelización.

### 🔗 Conectar Wallet
1.  En la barra de navegación (arriba a la derecha), busca el botón **"🔗 Connect Wallet"**.
2.  Haz clic para conectar tu billetera **Metamask**.
3.  Si tienes tokens **$DULCE**, verás tu saldo reflejado.

### 🏆 Proof of Cake (NFTs)
El sistema premia a los usuarios que suben fotos de tortas reales.
1.  Abre el Chatbot.
2.  Sube una foto de tu pedido.
3.  Si la **Vision AI** confirma que es una torta con >60% de confianza, recibirás un **Certificado NFT** en el chat.
4.  *(Simulación)* El certificado se guarda en tu historial local.

### 📡 Sincronización P2P
Tus cambios en el Admin Panel se sincronizan automáticamente entre dispositivos abiertos usando **Gun.js**. No necesitas guardar ni recargar la página.

---

## 8. Subir Cambios a Internet

### Con Netlify + GitHub (Recomendado):
1. Haz tus cambios en los archivos TypeScript
2. Haz commit y push:
   ```bash
   git add .
   git commit -m "Actualización de productos"
   git push
   ```
3. Netlify detecta el cambio, hace `npm run build` y actualiza tu sitio automáticamente

### Deploy manual a Netlify:
1. Ejecuta `npm run build` en la carpeta `pastelito-next/`
2. Ve a [app.netlify.com](https://app.netlify.com)
3. Arrastra la carpeta `.next` generada al panel de Netlify

---

## 9. Desarrollo Local

### Requisitos
- Node.js v18+ ([descargar](https://nodejs.org/))

### Iniciar
```bash
cd pastelito-next
npm install        # Solo la primera vez
npm run dev        # Inicia servidor de desarrollo
```
Abre **http://localhost:3000** en tu navegador.

### Build de producción
```bash
npm run build
```

---

## 10. Solución de Problemas

| Problema | Solución |
|----------|-----------|
| Error `npm: command not found` | Instala Node.js desde nodejs.org |
| Error en `npm run build` | Corre `npx tsc --noEmit` primero para ver los errores |
| No se ven los productos | Revisa `src/data/products.ts` → debe exportar un array válido |
| El cupón no funciona | Verifica que el código exista en SiteConfigContext y esté en mayúsculas |
| El dashboard está vacío | Los datos se generan con pedidos. Haz un pedido de prueba primero |
| Dark mode no funciona | Limpia localStorage del navegador y recarga |
| El chatbot no aparece | Verifica que `ChatbotLoader` esté importado en `layout.tsx` |
| El login admin no funciona | Verifica que tus vars de Firebase (`NEXT_PUBLIC_FIREBASE_*`) estén configuradas |
| El pago con tarjeta no aparece | Configura `NEXT_PUBLIC_CULQI_PUBLIC_KEY` en `.env.local` |
| Las notificaciones push no llegan | Configura `NEXT_PUBLIC_FIREBASE_VAPID_KEY` y rellena `firebase-messaging-sw.js` |

---

---

## 🗂️ Resumen de Archivos Editables

| Archivo | Para qué sirve | Frecuencia |
|---------|----------------|------------|
| `src/data/products.ts` | Productos, precios, stock, combos | Frecuente |
| `src/data/chatbot-kb.ts` | Respuestas del chatbot (120+) | Ocasional |
| `src/lib/firebase.ts` | Configuración de Firebase (env vars) | Una sola vez |
| `src/lib/firebaseOrders.ts` | CRUD de pedidos Firestore + localStorage | Rara vez |
| `src/components/dashboard/ProductManager.tsx` | Gestor visual de productos (v3.0) | Rara vez |
| `src/components/dashboard/OrderPipeline.tsx` | Pipeline visual de pedidos (Fase 20) | Rara vez |
| `src/components/dashboard/CouponManager.tsx` | Gestor visual de cupones (v3.0) | Rara vez |
| `src/components/dashboard/QuickThemeEditor.tsx` | Editor visual de temas + preview (v3.0) | Rara vez |
| `src/components/dashboard/AdvancedAnalytics.tsx` | Analytics avanzados visuales (v3.0) | Rara vez |
| `src/lib/recommendationEngine.ts` | Motor de recomendaciones (v2.0) | Rara vez |
| `src/lib/proactiveAlerts.ts` | Alertas proactivas y fechas (v2.0) | Rara vez |
| `src/lib/multiTurnEngine.ts` | Wizards de creación guiada (v2.0) | Rara vez |
| `src/lib/adminBrain.ts` | Analytics financieros + CEO v3.0 | Rara vez |
| `src/lib/ai/semanticEngine.ts` | Motor de IA semántico (transformers.js) 🆕 | Rara vez |
| `src/lib/ai/localBrain.ts` | Clasificador Naive Bayes (fallback) | Rara vez |
| `src/lib/ai/fallbackChain.ts` | Cadena de respuesta: Semantic → Local → WhatsApp | Rara vez |
| `src/app/admin/page.tsx` | Contraseña del dashboard | Una sola vez |
| `src/app/globals.css` | Colores y estilo general | Rara vez |

---

**Desarrollado por:** Rodrigo Alejandro Vega Rojas (DarckRovert)
© 2026 Dulces Momentos
