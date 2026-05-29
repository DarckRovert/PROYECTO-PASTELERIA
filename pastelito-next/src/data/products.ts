export interface Product {
    id: string;
    title: string;
    category: string;
    price: number;
    originalPrice?: number;
    description: string;
    image: string;
    imagePosition?: string;
    stock: 'available' | 'low' | 'out_of_stock';
    featured: boolean;
    savings?: number;
    preparationTime?: number;
    tags?: string[];
}

export const products: Product[] = [
    // JUGOS
    {
        id: 'jugo-surtido',
        title: "Jugo Surtido",
        category: "jugos",
        price: 8.00,
        description: "El clásico surtido de papaya, piña, plátano, manzana y beterraga opcional. Fresco y natural.",
        image: "/img/products/jugo-surtido.webp",
        imagePosition: "center center",
        stock: "available",
        featured: true,
        preparationTime: 5,
        tags: ["popular"]
    },
    {
        id: 'jugo-fresa',
        title: "Jugo de Fresa con Leche",
        category: "jugos",
        price: 9.00,
        description: "Fresas seleccionadas licuadas con leche evaporada y el toque exacto de dulzor.",
        image: "/img/products/jugo-fresa.webp",
        stock: "available",
        featured: false,
        preparationTime: 5
    },
    {
        id: 'jugo-platano',
        title: "Jugo de Plátano con Leche",
        category: "jugos",
        price: 7.00,
        description: "Dulce y nutritivo, preparado al momento.",
        image: "/img/products/jugo-platano.webp",
        stock: "available",
        featured: false,
        preparationTime: 5
    },
    {
        id: 'jugo-papaya',
        title: "Jugo de Papaya",
        category: "jugos",
        price: 7.00,
        description: "Pura papaya, ligero y digestivo.",
        image: "/img/products/jugo-papaya.webp",
        stock: "available",
        featured: false,
        preparationTime: 5
    },
    {
        id: 'jugo-especial',
        title: "Jugo Especial de la Casa",
        category: "jugos",
        price: 12.00,
        description: "Nuestra mezcla secreta con algarrobina, huevo, leche y frutas seleccionadas. ¡Un levanta muertos!",
        image: "/img/products/jugo-especial.webp",
        stock: "available",
        featured: true,
        preparationTime: 8,
        tags: ["recomendado"]
    },

    // EMPANADAS
    {
        id: 'empanada-carne',
        title: "Empanada de Carne Tradicional",
        category: "empanadas",
        price: 6.00,
        description: "Masa hojaldrada rellena de carne picada jugosa, huevo duro y aceituna. Horneada al punto perfecto.",
        image: "/img/products/empanada-carne.webp",
        stock: "available",
        featured: true,
        preparationTime: 10,
        tags: ["horneado"]
    },
    {
        id: 'empanada-pollo',
        title: "Empanada de Pollo",
        category: "empanadas",
        price: 6.00,
        description: "Relleno cremoso de pechuga de pollo deshilachada.",
        image: "/img/products/empanada-pollo.webp",
        stock: "available",
        featured: false,
        preparationTime: 10
    },
    {
        id: 'empanada-queso',
        title: "Empanada Frita de Queso",
        category: "empanadas",
        price: 5.00,
        description: "Masa crujiente frita al momento, rellena de abundante queso derretido.",
        image: "/img/products/empanada-queso.webp",
        stock: "available",
        featured: false,
        preparationTime: 12,
        tags: ["frito"]
    },

    // PASTELES
    {
        id: 'pionono-clasico',
        title: "Pionono Clásico",
        category: "pasteles",
        price: 4.50,
        description: "Porción de bizcochuelo super suave relleno del mejor manjar blanco.",
        image: "/img/products/pionono-clasico.webp",
        stock: "available",
        featured: false
    },
    {
        id: 'queque-marmoleado',
        title: "Porción Queque Marmoleado",
        category: "pasteles",
        price: 3.50,
        description: "El equilibrio de vainilla y chocolate. Suave y esponjoso.",
        image: "/img/products/queque-marmoleado.webp",
        stock: "available",
        featured: false
    },
    {
        id: 'alfajores',
        title: "Cajita de Alfajores (10 und)",
        category: "pasteles",
        price: 15.00,
        description: "Se deshacen en tu boca. Rellenos de mucho manjar blanco.",
        image: "/img/products/alfajores.webp",
        stock: "available",
        featured: false
    },
    {
        id: 'pye-manzana',
        title: "Pye de Manzana",
        category: "pasteles",
        price: 6.00,
        description: "Masa crujiente rellena de manzanas acarameladas con canela.",
        image: "/img/products/pye-manzana.webp",
        stock: "available",
        featured: true,
        tags: ["postre"]
    },

    // POSTRES
    {
        id: 'crema-volteada',
        title: "Crema Volteada",
        category: "postres",
        price: 6.50,
        description: "Suave, con el toque perfecto de caramelo. Estilo casero.",
        image: "/img/products/crema-volteada.webp",
        stock: "available",
        featured: true
    },
    {
        id: 'flan',
        title: "Flan de Vainilla",
        category: "postres",
        price: 4.00,
        description: "Clásico flan de vainilla con caramelo.",
        image: "/img/products/flan.webp",
        stock: "available",
        featured: false
    },
    {
        id: 'gelatina',
        title: "Gelatina de Fresa",
        category: "postres",
        price: 3.00,
        description: "Refrescante gelatina sabor a fresa.",
        image: "/img/products/gelatina.webp",
        stock: "available",
        featured: false
    },

    // SANDWICHS
    {
        id: 'pan-chicharron',
        title: "Pan con Chicharrón",
        category: "sandwichs",
        price: 14.00,
        description: "Kilo de sabor en pan francés crujiente con camote frito y sarza criolla.",
        image: "/img/products/pan-chicharron.png",
        stock: "available",
        featured: true,
        preparationTime: 15,
        tags: ["nuevo", "popular"]
    },
    {
        id: 'pan-pollo',
        title: "Sándwich de Pollo",
        category: "sandwichs",
        price: 7.00,
        description: "Clásico de fiestas: pollo deshilachado con mayonesa casera en pan de molde grueso.",
        image: "/img/products/pan-pollo.webp",
        stock: "available",
        featured: false,
        preparationTime: 5
    },
    {
        id: 'pan-palta',
        title: "Pan con Palta Fuerte",
        category: "sandwichs",
        price: 5.00,
        description: "Palta fuerte recién molida con un toque de sal y limón.",
        image: "/img/products/pan-palta.webp",
        stock: "available",
        featured: false,
        preparationTime: 5
    },

    // BEBIDAS FRÍAS
    {
        id: 'chicha-morada',
        title: "Chicha Morada (1 Litro)",
        category: "bebidas-frias",
        price: 12.00,
        description: "Chicha morada hervida con manzana, piña y membrillo. No usamos esencias.",
        image: "/img/products/chicha-morada.png",
        stock: "available",
        featured: true
    },
    {
        id: 'limonada-frozen',
        title: "Limonada Frozen",
        category: "bebidas-frias",
        price: 8.00,
        description: "Limón peruano licuado con hielo frappé y jarabe de goma.",
        image: "/img/products/limonada-frozen.webp",
        stock: "available",
        featured: false
    },
    {
        id: 'maracumango',
        title: "Maracumango Frozen",
        category: "bebidas-frias",
        price: 10.00,
        description: "La combinación perfecta de maracuyá y mango en frozen.",
        image: "/img/products/maracumango.webp",
        stock: "available",
        featured: true
    },

    // BEBIDAS CALIENTES
    {
        id: 'cafe-pasado',
        title: "Café Pasado",
        category: "bebidas-calientes",
        price: 5.00,
        description: "Café de Chanchamayo pasado gota a gota.",
        image: "/img/products/cafe-pasado.webp",
        stock: "available",
        featured: false
    },
    {
        id: 'cafe-leche',
        title: "Café con Leche",
        category: "bebidas-calientes",
        price: 7.00,
        description: "Café pasado con leche evaporada bien caliente.",
        image: "/img/products/cafe-leche.webp",
        stock: "available",
        featured: false
    },
    {
        id: 'infusion-manzanilla',
        title: "Infusión de Manzanilla",
        category: "bebidas-calientes",
        price: 3.50,
        description: "Manzanilla caliente para relajar.",
        image: "/img/products/infusion-manzanilla.webp",
        stock: "available",
        featured: false
    }
];
