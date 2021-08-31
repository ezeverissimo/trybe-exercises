const order = {
    name: 'Luiz Silva',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 'R$ 50,00',
    },
  };
  
  const customerInfo = (order) => {
    const delivery = Object.values(order.order.delivery)
    const remetente= delivery[0]
    const destinatario = order.name;
    const telefone = order.phoneNumber;
    const remetenteEndereco = Object.values(order.address)
    const rua = remetenteEndereco[0];
    const numeroResidencia = remetenteEndereco[1]
    const apartamento = remetenteEndereco[2]

    return `Olá ${remetente}, entrega para: ${destinatario}, Telefone: ${telefone}, R. ${rua}, Nº: ${numeroResidencia}, AP: ${apartamento}`;
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const destinatario = order.name;
    const total = Object.values(order.payment);
    return `Olá ${destinatario}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é ${total}.`;
  
  }
  
  orderModifier(order);