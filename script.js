function openModal() {
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('contactForm').reset();
}

function closeModalOnOutsideClick(event) {
    if (event.target === document.getElementById('modalOverlay')) {
        closeModal();
    }
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // IMPORTANTE: Reemplaza con tu dirección de email
    const mailtoLink = `mailto:tu_email@ejemplo.com?subject=Contacto de ${encodeURIComponent(name)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`)}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
        closeModal();
    }, 500);
});

function sendWhatsApp() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    // IMPORTANTE: Reemplaza con tu número de WhatsApp (formato internacional sin +)
    const phoneNumber = '51957711767';
    const whatsappMessage = `Hola, soy ${name}. ${message}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappLink, '_blank');
    
    setTimeout(() => {
        closeModal();
    }, 500);
}

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});


// ========== FUNCIONES PARA MODAL DE SERVICIOS ==========

function openServicesModal() {
    document.getElementById('servicesModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeServicesModal() {
    document.getElementById('servicesModalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function closeServicesModalOnOutsideClick(event) {
    if (event.target === document.getElementById('servicesModalOverlay')) {
        closeServicesModal();
    }
}

// Cerrar modal de servicios con tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const servicesModal = document.getElementById('servicesModalOverlay');
        if (servicesModal && servicesModal.classList.contains('active')) {
            closeServicesModal();
        }
    }
});


// ========== FUNCIONES PARA MODAL DE HABILIDADES ==========

function openSkillsModal() {
    document.getElementById('skillsModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animar las barras de progreso después de abrir el modal
    setTimeout(() => {
        animateProgressBars();
    }, 300);
}

function closeSkillsModal() {
    document.getElementById('skillsModalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Resetear las barras de progreso
    resetProgressBars();
}

function closeSkillsModalOnOutsideClick(event) {
    if (event.target === document.getElementById('skillsModalOverlay')) {
        closeSkillsModal();
    }
}

// Cambiar entre tabs de habilidades
function changeSkillTab(event, tabName) {
    // Remover clase active de todos los tabs
    const tabs = document.getElementsByClassName('skill-tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    // Remover clase active de todo el contenido
    const contents = document.getElementsByClassName('skill-content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    
    // Agregar clase active al tab clickeado
    event.currentTarget.classList.add('active');
    
    // Mostrar el contenido correspondiente
    document.getElementById(tabName).classList.add('active');
    
    // Animar las barras de progreso del tab seleccionado
    setTimeout(() => {
        animateProgressBars();
    }, 100);
}

// Animar barras de progreso
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.skill-content.active .progress-fill');
    
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

// Resetear barras de progreso
function resetProgressBars() {
    const allProgressBars = document.querySelectorAll('.progress-fill');
    
    allProgressBars.forEach(bar => {
        bar.style.width = '0%';
    });
}

// Cerrar modal de habilidades con tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const skillsModal = document.getElementById('skillsModalOverlay');
        if (skillsModal && skillsModal.classList.contains('active')) {
            closeSkillsModal();
        }
    }
});

// ========== FUNCIONES PARA MODAL DE CONTACTO ==========

function openModal() {
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('contactForm').reset();
}

function closeModalOnOutsideClick(event) {
    if (event.target === document.getElementById('modalOverlay')) {
        closeModal();
    }
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // IMPORTANTE: Reemplaza con tu dirección de email
    const mailtoLink = `mailto:tu_email@ejemplo.com?subject=Contacto de ${encodeURIComponent(name)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`)}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
        closeModal();
    }, 500);
});

function sendWhatsApp() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    // IMPORTANTE: Reemplaza con tu número de WhatsApp (formato internacional sin +)
    const phoneNumber = '51999999999';
    const whatsappMessage = `Hola, soy ${name}. ${message}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappLink, '_blank');
    
    setTimeout(() => {
        closeModal();
    }, 500);
}

// ========== FUNCIONES PARA MODAL DE SERVICIOS ==========

function openServicesModal() {
    document.getElementById('servicesModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeServicesModal() {
    document.getElementById('servicesModalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function closeServicesModalOnOutsideClick(event) {
    if (event.target === document.getElementById('servicesModalOverlay')) {
        closeServicesModal();
    }
}

// ========== FUNCIONES PARA MODAL DE HABILIDADES ==========

function openSkillsModal() {
    document.getElementById('skillsModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animar las barras de progreso después de abrir el modal
    setTimeout(() => {
        animateProgressBars();
    }, 300);
}

function closeSkillsModal() {
    document.getElementById('skillsModalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Resetear las barras de progreso
    resetProgressBars();
}

function closeSkillsModalOnOutsideClick(event) {
    if (event.target === document.getElementById('skillsModalOverlay')) {
        closeSkillsModal();
    }
}

// Cambiar entre tabs de habilidades
function changeSkillTab(event, tabName) {
    // Remover clase active de todos los tabs
    const tabs = document.getElementsByClassName('skill-tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    // Remover clase active de todo el contenido
    const contents = document.getElementsByClassName('skill-content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    
    // Agregar clase active al tab clickeado
    event.currentTarget.classList.add('active');
    
    // Mostrar el contenido correspondiente
    document.getElementById(tabName).classList.add('active');
    
    // Animar las barras de progreso del tab seleccionado
    setTimeout(() => {
        animateProgressBars();
    }, 100);
}

// Animar barras de progreso
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.skill-content.active .progress-fill');
    
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

// Resetear barras de progreso
function resetProgressBars() {
    const allProgressBars = document.querySelectorAll('.progress-fill');
    
    allProgressBars.forEach(bar => {
        bar.style.width = '0%';
    });
}

// ========== FUNCIONES PARA MODAL DE EDUCACIÓN ==========

function openEducationModal() {
    document.getElementById('educationModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animar la entrada de las tarjetas de educación
    setTimeout(() => {
        animateEducationCards();
    }, 300);
}

function closeEducationModal() {
    document.getElementById('educationModalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function closeEducationModalOnOutsideClick(event) {
    if (event.target === document.getElementById('educationModalOverlay')) {
        closeEducationModal();
    }
}

// Animar tarjetas de educación al abrir modal
function animateEducationCards() {
    const educationCards = document.querySelectorAll('.education-card');
    
    educationCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateX(-50px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateX(0)';
            }, 50);
        }, index * 150);
    });
}

// ========== FUNCIONES PARA MODAL DE EXPERIENCIA ==========

function openExperienceModal() {
    document.getElementById('experienceModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animar la entrada de las tarjetas de experiencia
    setTimeout(() => {
        animateExperienceCards();
    }, 300);
}

function closeExperienceModal() {
    document.getElementById('experienceModalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function closeExperienceModalOnOutsideClick(event) {
    if (event.target === document.getElementById('experienceModalOverlay')) {
        closeExperienceModal();
    }
}

// Animar tarjetas de experiencia al abrir modal
function animateExperienceCards() {
    const experienceCards = document.querySelectorAll('.experience-card');
    
    experienceCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 200);
    });
}

// ========== EVENTO GLOBAL PARA CERRAR MODALES CON TECLA ESCAPE ==========

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Cerrar modal de contacto
        const contactModal = document.getElementById('modalOverlay');
        if (contactModal && contactModal.classList.contains('active')) {
            closeModal();
        }
        
        // Cerrar modal de servicios
        const servicesModal = document.getElementById('servicesModalOverlay');
        if (servicesModal && servicesModal.classList.contains('active')) {
            closeServicesModal();
        }
        
        // Cerrar modal de habilidades
        const skillsModal = document.getElementById('skillsModalOverlay');
        if (skillsModal && skillsModal.classList.contains('active')) {
            closeSkillsModal();
        }
        
        // Cerrar modal de educación
        const educationModal = document.getElementById('educationModalOverlay');
        if (educationModal && educationModal.classList.contains('active')) {
            closeEducationModal();
        }
        
        // Cerrar modal de experiencia
        const experienceModal = document.getElementById('experienceModalOverlay');
        if (experienceModal && experienceModal.classList.contains('active')) {
            closeExperienceModal();
        }
    }
});

// ========== FUNCIONES DE INICIALIZACIÓN ==========

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Portfolio interactivo cargado correctamente');
    
    // Verificar que todos los modales existan
    const modals = [
        'modalOverlay',
        'servicesModalOverlay',
        'skillsModalOverlay',
        'educationModalOverlay',
        'experienceModalOverlay'
    ];
    
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal) {
            console.log(`✅ Modal ${modalId} encontrado`);
        } else {
            console.warn(`⚠️ Modal ${modalId} no encontrado`);
        }
    });
    
    // Aplicar animaciones iniciales suaves a elementos de la página
    initializePageAnimations();
});

// Animaciones iniciales de la página
function initializePageAnimations() {
    // Animar elementos del home al cargar
    const homeContent = document.querySelector('.home-content');
    const homeImg = document.querySelector('.home-img');
    
    if (homeContent) {
        homeContent.style.opacity = '0';
        homeContent.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
            homeContent.style.transition = 'all 1s ease';
            homeContent.style.opacity = '1';
            homeContent.style.transform = 'translateX(0)';
        }, 200);
    }
    
    if (homeImg) {
        homeImg.style.opacity = '0';
        homeImg.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            homeImg.style.transition = 'all 1s ease';
            homeImg.style.opacity = '1';
            homeImg.style.transform = 'scale(1)';
        }, 400);
    }
    
    // Animar iconos sociales
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            icon.style.transition = 'all 0.5s ease';
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, 600 + (index * 100));
    });
}

// ========== FUNCIONES AUXILIARES ==========

// Función para scroll suave (opcional, si deseas agregar navegación por anclas)
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Función para copiar texto al portapapeles (útil para email o teléfono)
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('✅ Copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar:', err);
        });
    } else {
        // Fallback para navegadores antiguos
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showNotification('✅ Copiado al portapapeles');
        } catch (err) {
            console.error('Error al copiar:', err);
        }
        document.body.removeChild(textarea);
    }
}

// Función para mostrar notificaciones temporales
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #b74b4b, #d45a5a);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(183, 75, 75, 0.5);
        z-index: 10000;
        font-size: 14px;
        font-weight: 600;
        animation: slideInUp 0.4s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.4s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 400);
    }, 3000);
}

// Agregar estilos para las animaciones de notificación
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            transform: translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutDown {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========== MANEJO DE ERRORES GLOBAL ==========

window.addEventListener('error', function(e) {
    console.error('Error detectado:', e.message);
});

// ========== PREVENIR COMPORTAMIENTO POR DEFECTO EN ENLACES # ==========

document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
        // Solo prevenir si no tiene onclick definido
        if (!e.target.hasAttribute('onclick')) {
            e.preventDefault();
        }
    }
});

// ========== MENSAJE DE CONSOLA PERSONALIZADO ==========

console.log('%c🚀 Portfolio Personal - Roni Omar', 'color: #b74b4b; font-size: 20px; font-weight: bold;');
console.log('%c💻 Desarrollado con pasión y dedicación', 'color: #d45a5a; font-size: 14px;');
console.log('%c📧 Contacto: tu_email@ejemplo.com', 'color: #888; font-size: 12px;');
console.log('%c' + '='.repeat(50), 'color: #b74b4b;');