    
// Language translations object, containing content for different languages
const translations = {
    en: {
      welcomeText: '🤍 Welcome to Senior Next 🤍',
      description: 'Your journey to meaningful connections begins here. Love, Friendship, or Both.',
      featuresTitle: 'Why Senior Next?',
      matchTitle: 'Find Your Match 💞',
      matchDesc: 'Discover meaningful connections tailored to you.',
      friendshipTitle: 'Build Friendships 🤝',
      friendshipDesc: 'Engage with like-minded individuals and grow your social circle.',
      secureTitle: 'Stay Secure 🔐',
      secureDesc: 'We prioritise your privacy with robust ID verification.',
      ctaTitle: 'Get Started Today',
      signupBtn: 'Join the Fun! 🎉',
      loginBtn: 'Already have an account?',
      footerText: '© 2024 Senior Next. All Rights Reserved.',
      reviews: [
        { text: '"Senior Next changed my life! I found love again at 65."', name: 'Margaret T.' },
        { text: '"A safe and friendly platform for meeting new people."', name: 'Robert G.' },
        { text: '"I made lifelong friends and even found a companion for my travels."', name: 'Linda P.' },
        { text: '"It feels wonderful to connect with others who understand me. Highly recommended!"', name: 'Helen K.' },
        { text: '"I’ve met some amazing people here. Senior Next made it easy to feel comfortable."', name: 'James M.' }
      ]
    },
    es: {
      welcomeText: '🤍 Bienvenido a Senior Next 🤍',
      description: 'Tu viaje hacia conexiones significativas comienza aquí. Amor, amistad o ambos.',
      featuresTitle: '¿Por qué Senior Next?',
      matchTitle: 'Encuentra tu Pareja 💞',
      matchDesc: 'Descubre conexiones significativas hechas para ti.',
      friendshipTitle: 'Haz Amistades 🤝',
      friendshipDesc: 'Interactúa con personas afines y expande tu círculo social.',
      secureTitle: 'Mantente Seguro 🔐',
      secureDesc: 'Priorizamos tu privacidad con verificación robusta de identidad.',
      ctaTitle: 'Comienza Hoy',
      signupBtn: '¡Únete a la diversión! 🎉',
      loginBtn: '¿Ya tienes una cuenta?',
      footerText: '© 2024 Senior Next. Todos los derechos reservados.',
      reviews: [
        { text: '"¡Senior Next cambió mi vida! Encontré el amor de nuevo a los 65."', name: 'Margaret T.' },
        { text: '"Una plataforma segura y amigable para conocer gente nueva."', name: 'Robert G.' },
        { text: '"Hice amigos para toda la vida e incluso encontré un compañero para mis viajes."', name: 'Linda P.' },
        { text: '"Es maravilloso conectar con personas que me entienden. ¡Muy recomendado!"', name: 'Helen K.' },
        { text: '"He conocido a personas increíbles aquí. Senior Next facilitó sentirme cómodo."', name: 'James M.' }
      ]
    },
    fr: {
      welcomeText: '🤍 Bienvenue sur Senior Next 🤍',
      description: 'Votre voyage vers des connexions significatives commence ici. Amour, Amitié, ou les deux.',
      featuresTitle: 'Pourquoi Senior Next?',
      matchTitle: 'Trouvez votre partenaire 💞',
      matchDesc: 'Découvrez des connexions significatives adaptées à vous.',
      friendshipTitle: 'Faites des Amis 🤝',
      friendshipDesc: 'Interagissez avec des personnes partageant les mêmes idées et élargissez votre cercle social.',
      secureTitle: 'Restez Sécurisé 🔐',
      secureDesc: 'Nous priorisons votre confidentialité avec une vérification d\'identité robuste.',
      ctaTitle: 'Commencez Aujourd\'hui',
      signupBtn: 'Rejoignez-nous ! 🎉',
      loginBtn: 'Vous avez déjà un compte?',
      footerText: '© 2024 Senior Next. Tous droits réservés.',
      reviews: [
        { text: '"Senior Next a changé ma vie ! J\'ai retrouvé l\'amour à 65 ans."', name: 'Margaret T.' },
        { text: '"Une plateforme sûre et conviviale pour rencontrer de nouvelles personnes."', name: 'Robert G.' },
        { text: '"J\'ai fait des amis pour la vie et même trouvé un compagnon pour mes voyages."', name: 'Linda P.' },
        { text: '"C\'est merveilleux de se connecter avec des gens qui me comprennent. Fortement recommandé!"', name: 'Helen K.' },
        { text: '"J\'ai rencontré des personnes incroyables ici. Senior Next a facilité ma rencontre avec d\'autres."', name: 'James M.' }
      ]
    }
  };
  
  // Function to translate the page content based on selected language
  function translatePage() {
    const language = document.getElementById('languages').value; // Get selected language
    const t = translations[language]; // Get translation object for the selected language
  
    // Update various page elements with the corresponding translated text
    document.getElementById('welcome-text').innerText = t.welcomeText;
    document.getElementById('description').innerText = t.description;
    document.getElementById('features-title').innerText = t.featuresTitle;
    document.getElementById('find-your-match').innerText = t.matchTitle;
    document.getElementById('match-desc').innerText = t.matchDesc;
    document.getElementById('build-friendships').innerText = t.friendshipTitle;
    document.getElementById('friendship-desc').innerText = t.friendshipDesc;
    document.getElementById('stay-secure').innerText = t.secureTitle;
    document.getElementById('secure-desc').innerText = t.secureDesc;
    document.getElementById('cta-text').innerText = t.ctaTitle;
    document.getElementById('signup-btn').innerText = t.signupBtn;
    document.getElementById('login-btn').innerText = t.loginBtn;
    document.getElementById('footer-text').innerText = t.footerText;
  
    // Update the reviews dynamically based on the selected language
    const reviews = t.reviews;
    document.getElementById('review-1-text').innerText = reviews[0].text;
    document.getElementById('review-1-name').innerText = reviews[0].name;
    document.getElementById('review-2-text').innerText = reviews[1].text;
    document.getElementById('review-2-name').innerText = reviews[1].name;
    document.getElementById('review-3-text').innerText = reviews[2].text;
    document.getElementById('review-3-name').innerText = reviews[2].name;
    document.getElementById('review-4-text').innerText = reviews[3].text;
    document.getElementById('review-4-name').innerText = reviews[3].name;
    document.getElementById('review-5-text').innerText = reviews[4].text;
    document.getElementById('review-5-name').innerText = reviews[4].name;
  }
  
  // Initialise translation with the default language (English) when the page loads
  translatePage();