<template>
    <!-- Title Section -->
    <div class="flyborder">
        <div class="flyrow">
            <div class="flycolumnsingle">
                <h1 class="title">Check Out Fly Tech Products</h1>
            </div>
        </div>
    </div>
    <!-- Shopping Cart Section -->
    <div class="flyborder">
        <div class="flyrow">

            <div id="app">
                <h3>SHOPPING CART</h3>
                <table>
                    <thead>
                        <!-- Table header row -->
                        <tr>
                            <th><input type="checkbox" @click='box_go'></th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Unit Price (NZD)</th>
                            <th>Amount (NZD)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Table body rows, rendered dynamically based on the 'list' data -->
                        <tr v-for='(tmp, index) in list' class="commodity">
                            <td data-label=""><input type="checkbox" v-model='tmp.isSel'></td>
                            <td data-label="Product Image"><img :src="tmp.image" class="img-thumbnail cart-img"></td>
                            <td data-label="Product Name">{{ tmp.name }}</td>
                            <td data-label="Quantity"><input type="number" v-model="tmp.id" min="0" max="20">
                            </td>
                            <td data-label="Unit Price (NZD)" class="itemprice">{{ tmp.price }}</td>
                            <td data-label="Amount (NZD)" class="itemamount">{{ tmp.price * tmp.id }}</td>
                            <td data-label="Action"><button @click='del(index)' class="deletebtn">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
                <!-- Checkout and total amount section -->
                <div class="shoppingcart-checkout">
                    <button id="go" type="button">Checkout</button>
                    <div class="buy">The total amount for <span id="productnumbers">{{ allshop() }}</span> item(s) is:
                        <span id="productsum">{{ allmoney() }}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
export default {
    name: 'CartItems',
    // Here you can add methods and data
    methods: {
        // Function to delete an item from the cart based on the index
        del(index) {
            this.list.splice(index, 1);
        },
        // Function to calculate the total quantity of selected items in the cart
        allshop() {
            let num = 0;
            for (let i in this.list) {
                if (this.list[i].isSel) {
                    num += parseInt(this.list[i].id);
                }
            }
            return num;
        },
        // Function to calculate the total amount of selected items in the cart
        allmoney() {
            let arr = [...this.list];
            let num = 0;
            for (let i in this.list) {
                if (this.list[i].isSel) {
                    num += arr[i].price * arr[i].id;
                }
            }
            return num;
        },
        // Function to toggle the selection of all items in the cart
        box_go() {
            if (this.box) {
                for (let i in this.list) {
                    this.list[i].isSel = true;
                }
                this.box = 0;
            } else {
                for (let i in this.list) {
                    this.list[i].isSel = false;
                }
                this.box = 1;
            }
        },
    },
    data() {
        return {
            // Initial data for the component
            box: 1,// Variable to control the checkbox state in the table header
            list: [// Array holding the products in the cart
                {
                    name: "Apple iPhone 14 Pro Max 256GB(Space Black)",
                    image: "/src/assets/images/iPhone_Space Black.jpg",
                    price: 2399,
                    isSel: false,
                    id: 1,
                },
                {
                    name: "Samsung Galaxy S21 FE 5G 128G (Lavender)",
                    image: "/src/assets/images/Samsung Lavender.jpg",
                    price: 1099,
                    isSel: false,
                    id: 1,
                },
                {
                    name: "OPPO Find X5 Pro 5G 256GB (Ceramic White)",
                    image: "/src/assets/images/OPPO Ceramic White.jpg",
                    price: 1799,
                    isSel: false,
                    id: 1,
                },
                {
                    name: "OPPO Find N2 Flip 5G 256GB (Astral Black)",
                    image: "/src/assets/images/OPPO Astral Black.jpg",
                    price: 1599,
                    isSel: false,
                    id: 1,
                },
                {
                    name: "OPPO A54s 128GB (Pearl Blue)",
                    image: "/src/assets/images/OPPO Pearl Blue.jpg",
                    price: 349,
                    isSel: false,
                    id: 1,
                },
            ],
        };
    },
};
</script>


<style scoped></style>
