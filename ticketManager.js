class TicketManager {
    eventos;
    #precioBaseGanancias

    constructor(){
        this.eventos = []
    }

    getNewId(){
        return this.eventos.length + 1;
    }

    getEventos(){
        return this.eventos; // estoy seria lo mas correcto, pero habria que hacer un console log al momento de llamarlo
        // console.log(this.eventos)
    }

    buscarEvento(id){
        let evento = this.eventos.find(elem => elem.id == id) 
        return evento;

    }

    agregarUsuario(idEvento, idUsuario){
        let evento = this.buscarEvento(idEvento);
        if(evento){
            evento.participantes.push(idUsuario)
        }


    }

    agregarEvento(nombre, lugar, precio, capacidad, fecha){
        let nuevoEvento = {
            id: this.getNewId(),
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes: []

        }

        this.eventos.push(nuevoEvento)
    }
}

let manager = new TicketManager()

manager.agregarEvento('evento1', 'buenos aires', 2000, 100, 982310831293)
manager.agregarEvento('evento2', 'buenos aires', 3000, 100, 982310831293)
manager.agregarUsuario(1, 456)
manager.agregarUsuario(1, 457)
manager.agregarUsuario(1, 459)
manager.getEventos()