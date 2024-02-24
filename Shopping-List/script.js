class ShoppingList {
    constructor(itemsSelector,
         additemButtonSelector,
          newItemSelector,
          storageKey = 'shoppingList') {

            this.storageKey = storageKey
            this.itemsElement = document.querySelector(itemsSelector)
            this.addItemButtonElement =  document.querySelector(additemButtonSelector)
            this.newItemTextElement = document.querySelector(newItemSelector)

            this.items = JSON.parse(localStorage.getItem(this.storageKey)) || []
            this.Intialise()
  
        }
        Intialise() {
            this.addItemButtonElement.addEventListener('click', () => {
                const text = this.newItemTextElement.value
                this.addItem(text)
                this.newItemTextElement.value = ''
                this.renderItems()
                this.storeItems()
            })
        }

        renderItems() {
            this.itemsElement.innerHTML = ''
            if(this.items.length === 0) {
                const itemElement = document.createElement('li')
                itemElement.textContent ='No items'
                this.itemsElement.appendChild(itemElement)

            }

            this.items.forEach((item, index) => {
                
                const itemElement = document.createElement('li')
                itemElement.textContent = item;
                const removeElement = document.createElement('span')
                removeElement.textContent = 'Remove'
                removeElement.classList.add('remove-item')
                removeElement.onclick = () => {
                    
                    this.removeItemAt(index)
                    this.renderItems()
                    this.storeItems()

                }
                itemElement.appendChild(removeElement);
                this.itemsElement.appendChild(itemElement);
            });

        }

        addItem(newItem) {
            this.items.push(newItem)
        }
        removeItemAt(indexToRemove) {
            this.items = this.items.filter((item, index) => indexToRemove != index)
        }
        storeItems() {
            localStorage.setItem(this.storageKey, JSON.stringify(this.items))
        }
}


const myShoppingList = new ShoppingList('#shoppingListItems', '#addItem', '#newItemtext')

myShoppingList.renderItems()