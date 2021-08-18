function criaEstados() {
    const estadosBrasil = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espirito Santo','Goiás','Maranhão','Mato Grosso do Sul','Mato Grosso','Minas Gerai','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
    const siglasEstado = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
    const selectEstados = document.getElementById('estado-input');
    
    for (index = 0; index < estadosBrasil.length; index += 1) {
        const optionEstados = document.createElement('option');
        selectEstados.appendChild(optionEstados);
        optionEstados.innerText = estadosBrasil[index];
        optionEstados.value = siglasEstado[index];
    }
}
criaEstados();


