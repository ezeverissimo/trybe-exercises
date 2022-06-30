def revert():
    name = input("Digite seu primeiro nome: ")

    count = len(name)
    while count > 1:
        print(name)
        name, count = name[:-1], len(name)


revert()
