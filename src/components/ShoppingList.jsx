import { Button } from "react-bootstrap";
import { useState } from "react";

export default function ShoppingList() {

    const [addItem, setAddItem] = useState("");
    const [shoppingList, setShoppingList] = useState([]);

    const handleAddToList = () => {
        if (addItem === "") return; //if input is empty, do nothing

        setShoppingList([...shoppingList, addItem]) //add new item to existing variable list

        setAddItem(""); //at end, clear input to empty
    };

    return (
        <div>
            <input
                type="text"
                value={addItem}
                onChange={(e) => setAddItem(e.target.value)}
                placeholder="Enter item name"
            />
            <Button onClick={handleAddToList}>
                Add to Shopping List
            </Button>

            {shoppingList.map((item, index) => (
                <div key={index}>
                    <p>{item}</p>
                    <Button onClick={() => setShoppingList(shoppingList.filter((_, i) => i !== index))}>Remove Item</Button>
                </div>
            ))}
        </div>
    );
}