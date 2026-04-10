// DATOS DEL MENÚ
const menuItems = [
    { id: 1, name: "Tostada de ceviche",
    category: "entradas",
    description:"Fresco ceviche de pescado con toque cítrico, sobre crujiente tostada.",
    price: "$45",
    image: "https://images.unsplash.com/photo-1681394421463-9b7471f95b50?q=80&w=402&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },

    { id: 2, name: "Taco gobernador",
    category: "entradas",
    description: "Delicioso taco de camarón y queso fundido con un toque de chile.",
    price: "$50",
    image: "https://i.blogs.es/ba0112/tacos-gobernador/650_1200.jpg" },

    { id: 3,
    name: "Empanada de marlin",
    category: "entradas",
    description: "Crujiente empanada rellena de marlín ahumado y especias tradicionales.",
    price: "$65",
    image: "https://i.ytimg.com/vi/wc7K2ya7c7w/sddefault.jpg" },

    { id: 4,
    name: "Camarones las varas",
    category: "platillos",
    description: "Camarones jugosos salteados con ajo y mantequilla, servidos al estilo de la costa.",
    price: "$250",
    image: "https://i0.wp.com/www.recorriendomitierra.com/wp-content/uploads/2020/04/camarones-a-la-cucaracha-2.jpeg?fit=1728%2C1080&ssl=1" },

    { id: 5,
    name: "Ostiones",
    category: "platillos",
    description: "Ostiones frescos con un toque de limón y salsa especial que realza su sabor natural.",
    price: "$250",
    image: "https://pbs.twimg.com/media/D3-A8-OUYAAfGPO.jpg:large" },

    { id: 6,
    name: "Huauchinango",
    category: "platillos",
    description: "Filete de guauchinango tierno, cocinado a la perfección y acompañado de especias ligeras.",
    price: "$300",
    image: "https://i.ytimg.com/vi/FFBKr8RXVAU/maxresdefault.jpg" },

    { id: 7,
    name: "Robalo con salsa tártara",
    category: "platillos",
    description: "Filete de robalo delicado acompañado de cremosa salsa tártara casera.",
    price: "$350",
    image: "https://assets.unileversolutions.com/recipes-v3/93569-default.jpg" },

    { id: 8,
    name: "Pulpo a las brasas",
    category: "platillos",
    description: "Pulpo ahumado a la parrilla, suave por dentro y ligeramente crujiente por fuera.",
    price: "$400",
    image: "https://www.miguelnaranjo.mx/main/wp-content/uploads/2020/04/www.miguelnaranjo.mx18ostioncito.jpg" },

    { id: 9,
    name: "Langosta a la mantequilla",
    category: "platillos",
    description: "Langosta entera bañada en mantequilla dorada y especias, una experiencia gourmet.",
    price: "$900",
    image: "https://cdn-blog.joinnus.com/blog/wp-content/uploads/2018/07/27161143/langosta-a-la-parrilla-con-papitas-coctail.jpg" },

    { id: 10,
    name: "Refresco",
    category: "bebidas",
    description: "Clásico refresco frío, perfecto para acompañar tu comida.",
    price: "$30",
    image: "https://thumbs.dreamstime.com/b/botellas-de-refrescos-globales-clasificados-93282709.jpg" },

    { id: 11,
    name: "Agua de sabor",
    category: "bebidas",
    description: "Natural y refrescante, con sabores frutales auténticos.",
    price: "$30",
    image: "https://foodandwineespanol.com/wp-content/uploads/2021/05/destacada_aguapolvosaborizante.webp" },

    { id: 12,
    name: "Cerveza",
    category: "bebidas",
    description: "Fría y ligera, ideal para maridar con mariscos y platillos frescos.",
    price: "$40",
    image: "https://media.informabtl.com/wp-content/uploads/2024/09/e037de25-cervezas-mexicanas-e1726154778746.jpg" },
    
    // Agrega más platos aquí...
];

// FILTRADO DEL MENÚ
function displayMenuItems(category = 'all') {
    const menuContainer = document.querySelector('.menu-items');
    
    // Limpiar el contenedor
    menuContainer.innerHTML = '';
    
    // Filtrar elementos según la categoría
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    // Mostrar mensaje si no hay elementos
    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-items-message">
                <p>No hay elementos en esta categoría.</p>
            </div>
        `;
        return;
    }
    
    // Generar HTML para cada elemento del menú
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.dataset.category = item.category;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.price}</span>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

// Función para manejar los botones de filtrado
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Obtener la categoría del botón
            const category = button.dataset.category;
            
            // Mostrar los elementos de la categoría seleccionada
            displayMenuItems(category);
        });
    });
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(); // Carga todos los elementos al inicio
    setupFilterButtons(); // Configura los eventos de los botones de filtrado
});