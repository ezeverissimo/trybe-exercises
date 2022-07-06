class Shop():
    def __init__(self):
        self.refrigerator = {
            'name': 'refrigerator',
            'price': 599.00
        }
        self.mixer = {
            'name': 'mixer',
            'price': 299.00
        }
        self.stove = {
            'name': 'stove',
            'price': 899.00
        }
        
    def list(self):
        return [self.refrigerator, self.mixer, self.stove]


class People():
    def __init__(self):
        self.money_in_wallet = 633.37
        self.electronics = []
        
        
    def __str__(self):
        return f"""
    Essa pessoa tem esses eletronicos:
    {self.electronics}
    
    Essa pessoa ainda tem {self.money_in_wallet} em sua carteira
    """
        
    def buy_electronics(self, shop: Shop, eletronic):
        eletronics = shop.list()
        eletronic_filtered = [ e for e in eletronics if(e["name"] == eletronic)]
        
        new_eletronic = eletronic_filtered[0]

        if(new_eletronic["price"] <= self.money_in_wallet):
            self.electronics.append(new_eletronic)
            self.money_in_wallet -= new_eletronic["price"]

            
  
shop = Shop()
          
people = People()
people.buy_electronics(shop, 'mixer')

print(people)


        
        
    


