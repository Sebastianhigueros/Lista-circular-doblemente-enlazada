class Nodo{
    constructor(valor){
        this.valor = valor;
        this.siguiente = null
        this.anterior = null
    }
}

class ListaCircularDoble{
    constructor(){
        this.inicio = null
   }

    insertarNodoInicio(dato){
        let nuevo = new Nodo(dato)

        if(this.inicio == null){
            this.inicio = nuevo
        }else{
            nuevo.siguiente = this.inicio
            nuevo.anterior = this.inicio
            this.inicio.anterior = nuevo
            this.inicio.siguiente = nuevo
            this.inicio = nuevo
        }
   }
   insertarNodoFinal(dato){
       let nuevo = new Nodo(dato)

       if(this.inicio == null){
           this.inicio = nuevo
       }else{
           let temp = this.inicio
           while(temp.siguiente != this.inicio){
               temp = temp.siguiente
           }
           temp.siguiente = nuevo
           nuevo.anterior = temp
           nuevo.siguiente = this.inicio
       }
   }

   mostrarLista(){
       let temp = this.inicio
       console.log("***** lista circular *****")
       while(temp.siguiente != this.inicio){
           console.log("-",temp.valor)
           temp = temp.siguiente
       }
       console.log("-",temp.valor)
   }
}

nuevaLista = new ListaCircularDoble()

nuevaLista.insertarNodoFinal(8)
nuevaLista.insertarNodoInicio(6)
nuevaLista.insertarNodoFinal(7)

nuevaLista.mostrarLista()