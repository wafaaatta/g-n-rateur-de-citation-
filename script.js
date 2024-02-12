const fragments = {
    sujet: ["La vie", "L'amour", "La rouge", "La cuisine", "La palestine"],
    verbe: ["est", "a été", "sera", "a", "avait"],
    complement: ["bommobardé.", "la clé du bonheur.", "un misrable.", "une source de joie."]
  };
  
  function generateQuote() {
    let numQuotes = document.getElementById('numQuotes').value;
    let quotes = '';
    
    for (let i = 0; i < numQuotes; i++) { //une boucle for en JavaScript pour répéter un bloc d'instructions un certain nombre de fois, déterminé par la valeur de numQuotes
      let sujet = fragments.sujet[Math.floor(Math.random() * fragments.sujet.length)];
      let verbe = fragments.verbe[Math.floor(Math.random() * fragments.verbe.length)];
      let complement = fragments.complement[Math.floor(Math.random() * fragments.complement.length)];
      quotes += `<p>${sujet} ${verbe} ${complement}</p>`;//est utilisé pour insérer les valeurs des variables
      
    }
    
    return quotes;//statement stops the execution of a function and returns a value.
  }
  
  document.getElementById('generateBtn').addEventListener('click', function() {
    let quoteContainer = document.getElementById('quoteContainer');
    quoteContainer.innerHTML = generateQuote();
  });