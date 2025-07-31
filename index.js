const core = require('@actions/core');
try {
    var edadMayoria = 0;
    var edadTranscurrida = 0;
    const edad = core.getInput('edad');
    const apellido = core.getInput('apellido');
    const name = core.getInput('name');
    const secrets = core.getInput('secrets');
    console.log(`Hello ${name} ${apellido} tu edad ${edad}!`);
    if (edad >= 18) {
        edadMayoria = edad -18;
        edadTranscurrida = 100 - edad;
        console.log(`Años con mayoria de edad ${edadMayoria} años`);
        console.log(`Años para cumplir 100 años es:  ${edadTranscurrida} años`);
    } else {
        edadMayoria = 1;
        edadTranscurrida = edad;
        console.log(`Todavia no cumple la mayoria de edad, tiene ${edad} años`);
    }
    console.log(`Your secret is ${secrets}!`)
} catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
    
}