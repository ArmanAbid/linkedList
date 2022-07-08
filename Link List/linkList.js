class Node{
    constructor(value,next = null){
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor(value){
       let node = new Node(value)
       this.head = node
       this.tail = node
       this.length = 1
    }
    print(){
        let data = this.head
        while(data){
            console.log(data.value)
            data = data.next
        }
    }
    append(value){
        let node = new Node(value)
        this.tail.next = node
        this.tail = node
        this.length++
    }
    appendMultiple(arr){
       for(let i=0;i<arr.length;i++){
        this.append(arr[i])
       }
    }
    prepend(value){
        let node = new Node(value,this.head)
        this.head = node
        this.length++
    }
    prependMultiple(arr){
        for(let i=0;i<arr.length;i++){
            this.prepend(arr[i])
           }
    }
    #getprevious(index){
        index--
        let data = this.head
        while(index){
            data = data.next
            index--
        }
        return data
    }
    insertAtPosition(value,index){
        if(index==0) this.prepend(value)
        else if(index==this.length) this.append(value)
        else{
            let previousNode = this.#getprevious(index)
            let newNode = new Node(value,previousNode.next)
            previousNode.next =  newNode
        }
        this.length++
    }
    updateAtPosition(value,index){
        if(index == 0) this.head.value = value
        else if(index == this.length -1) this.tail.value = value
        else{
            let node = this.#getprevious(index)
            node.next.value = value
        }
    }
    deleteAtPosition(index){
        if(index===0){
            this.head = this.head.next
        }else if(index === this.length -1){
            let lastNode = this.#getprevious(index)
            lastNode.next = null
            this.tail = lastNode
        }else{
            let node = this.#getprevious(index)
            node.next =node.next.next
        }
        this.length++
    }
}    
list = new LinkedList(10)
list.append(20)
list.prepend(0)
list.insertAtPosition(30,3)
list.append(40)
list.updateAtPosition(10,3)
list.print()
