import { LightningElement, api, wire } from "lwc";

import { publish, MessageContext } from "lightning/messageService";
import PRODUCT_SELECTED_MESSAGE from "@salesforce/messageChannel/ProductSelected__c";

// getProducts() method in ProductController Apex class
import getProducts from "@salesforce/apex/ProductController.getProducts";

export default class DisplayProducts extends LightningElement {
  @api searchBarIsVisible = false;
  @api tilesAreDraggable = false;

  pageNumber = 1;
  totalItemCount = 0;
  pageSize;
  filters = {};

  // Load context for Ligthning Messaging Service
  @wire(MessageContext) messageContext;

  // Load the list of available products.
  @wire(getProducts, { filters: "$filters", pageNumber: "$pageNumber" })
  products;

  //Publish ProductSelected message
  handleProductSelected(event) {
    publish(this.messageContext, PRODUCT_SELECTED_MESSAGE, {
      productId: event.detail
    });
  }

  handleSearchKeyChange(event) {
    this.filters = { searchKey: event.target.value.toLowerCase() };
    this.pageNumber = 1;
  }
  handlePreviousPage() {
    this.pageNumber = this.pageNumber - 1;
  }

  handleNextPage() {
    this.pageNumber = this.pageNumber + 1;
  }
}
