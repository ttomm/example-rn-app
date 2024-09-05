Style
======

1. Komponenty mają domyślnie flex, flex-column
2. Style RN nie są dokładnym odwzorowaniem stylów CSS
3. Rózne komponenty mogą przyjmować różne (odmienne) style (rózne ich zestawy)


Warunkowe instrukcje wewnątrz View
=====================================


### 1. Warunkowe renderowanie z użyciem operatora trójargumentowego (`? :`):


```jsx
<View>
  {condition ? (
    <Text>Warunek spełniony</Text>
  ) : (
    <Text>Warunek niespełniony</Text>
  )}
</View>
```

### 2. Warunkowe renderowanie z użyciem `&&`:

Wyświetlanie tylko w przypadku, gdy warunek jest spełniony z użyciem operatora logicznego `&&`:

```jsx
<View>
  {condition && <Text>Warunek spełniony</Text>}
</View>
```

Jeśli `condition` jest `true`, komponent `<Text>` zostanie wyświetlony. Jeśli `condition` jest `false`, nic nie zostanie wyświetlone.

### 3. Warunkowe renderowanie z użyciem funkcji:

Przeniesienie logiki warunkowej do funkcji i wywołanie jej wewnątrz komponentu `<View>`:

```jsx
const renderContent = () => {
  if (condition) {
    return <Text>Warunek spełniony</Text>;
  } else {
    return <Text>Warunek niespełniony</Text>;
  }
};

<View>
  {renderContent()}
</View>
```

### 4. Warunkowe renderowanie z użyciem `if`:

Użycie pełnej instrukcji `if` opakowanej w IIFE:

```jsx
<View>
  {(() => {
    if (condition) {
      return <Text>Warunek spełniony</Text>;
    } else {
      return <Text>Warunek niespełniony</Text>;
    }
  })()}
</View>
```
 

Efekt press/tap (ripple)
==============================
1. Dla androida należy na elemencie "Pressable" (lub innym obsługującym) dodać:
```jsx
android_ripple={{color: '#ddd'}}
```
Mozna również określić inne style

2. Dla IOSa należy w stylach dodać funkcję jak poniżej:
```jsx
style={({pressed}) => pressed && {color: '#ddd'}}
```
Fynkcja otrzymuje parametr "pressed" po destructuringu i jeśli stan pressed jest równy
true to dodaje style określone po &&
