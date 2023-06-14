function calcularEstatisticas() {
 
    let dataInput = document.getElementById("data-input").value;
    let data = dataInput.split(",").map(Number);
  
    let media = data.reduce((a, b) => a + b, 0) / data.length;
  
    let sortedData = data.slice().sort((a, b) => a - b);
    let mediana;
    if (sortedData.length % 2 == 0) {
        let mid = sortedData.length / 2;
        mediana = (sortedData[mid - 1] + sortedData[mid]) / 2;
    } else {
        mediana = sortedData[Math.floor(sortedData.length / 2)];
    }
  
    let somaDiferencas = data.reduce((a, b) => a + Math.pow(b - media, 2), 0);
    let variancia = somaDiferencas / (data.length - 1);
  
    let desvioPadrao = Math.sqrt(variancia);
  
    let coeficienteVariacao = (desvioPadrao / media) * 100;
  
    let homogeneidade = coeficienteVariacao < 30 ? "homogêneo" : "heterogêneo";
  
    document.getElementById("media").textContent = "Média: " + media.toFixed(2);
    document.getElementById("mediana").textContent = "Mediana: " + mediana.toFixed(2);
    document.getElementById("variancia").textContent = "Variância Amostral: " + variancia.toFixed(2);
    document.getElementById("desvio-padrao").textContent = "Desvio Padrão: " + desvioPadrao.toFixed(2);
    document.getElementById("coeficiente-variancia").textContent = "Coeficiente de Variação: " + coeficienteVariacao.toFixed(2) + "%";
    document.getElementById("homogeneidade").textContent = "Homogeneniedade: " + homogeneidade;
}