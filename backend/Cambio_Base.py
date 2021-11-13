class CambioBase():
  CARACTERES = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  def basen_basedec(self, numero, base):
    partes = numero.upper().split('.')
    num_conv = 0
    for i, c in enumerate(reversed(partes[0])):
      num_conv += CambioBase.CARACTERES.find(c) * (base ** i)
    if len(partes) > 1:
      for i in range(1, len(partes[1])+1):
        num_conv += CambioBase.CARACTERES.find(partes[1][i-1]) * (base ** (-i))
    return str(num_conv)

  def basedec_basen(self, numero, base):
    partes = numero.split('.')
    entero = ''
    decimal = ''
    valor = int(partes[0])
    while valor > 0:
      entero += CambioBase.CARACTERES[valor % base]
      valor = int(valor / base)
    num_conv = entero[::-1] if entero != '' else '0'
    if len(partes) > 1:
      valor = int(partes[1]) / (10 ** len(partes[1]))
      while valor > 10 ** -9:
        decimal += CambioBase.CARACTERES[int(valor * base)]
        valor = (valor * base) - int(valor * base)
      num_conv += '.' + decimal
    return num_conv

  def max_num(self, numero:str):
    mayor = 0
    for c in numero.replace('.', '', 1).upper():
      indice = CambioBase.CARACTERES.find(c)
      if indice == -1:
        mayor = 100
        break
      mayor = max(mayor, indice)
    return mayor

  def basea_baseb(self, numero, basea, baseb):
    if numero and self.max_num(numero) < basea:
      if basea == baseb:
        num_baseb = numero
      elif baseb == 10:
        num_baseb = self.basen_basedec(numero, basea)
      else:
        num_dec = self.basen_basedec(numero, basea)
        num_baseb = self.basedec_basen(num_dec, baseb)
      return num_baseb