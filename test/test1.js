var popover = {

    // A bunch of code…
    // 添加量的文本
    addQuantityText: function ( quantity ) {
      var quantityTextOptions = {
        namespace: "quantity",
        initialChildIndex: 2,
        quantity: quantity
      };

      try {
        this.formatQuantityText( quantityTextOptions );
      } catch ( err ) {
        console.log( "Couldnt add quantity text!" );
      }
    },
  // 文本格式的数量//
    formatQuantityText: function ( options ) {
      if ( !this.$$boxContainer ) {
        throw new Error( "$$boxContainer is not configured" );
      }

      var namespace = options.namespace || "quantity";
      var quantity = options.quantity || 0;
      var initialChildIndex = options.initialChildIndex || 0;

      var $$quantity = new Canvas(); // implementation details hidden
      $$quantity.name = namespace;
      $$quantity.value = quantity;
      // 设置文本的颜色
      this.setQuantityTextColor( $$quantity );

      this.$$boxContainer.addChild( $$quantity, initialChildIndex );

      return $$quantity;
    },

    setQuantityTextColor: function ( $$quantity ) {
      if ( !$$quantity ) return;

      var minQuantity = getMinQuantity( $$quantity.name );
      var quantity = $$quantity.value || minQuantity;
      var hasEnoughQuantity = (quantity >= minQuantity);

      $$quantity.color = (hasEnoughQuantity) ? "green" : "red";
    },

    // A bunch of code…

  };


