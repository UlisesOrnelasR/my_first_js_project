let Ajolonauta = require('./../app/Ajolonauta')



describe('Prueba de unidad Ajolonauta',() => {
    test('Caso de prueba 1: creación de objeto', () => {
        //Aqui tu puedes usar el codigo como lo desee utilizar
        let pedrito = new Ajolonauta('Pedrito')


        // Validar el resultado esperado
        expect(pedrito.name).toBe('Pedrito');
    })
})