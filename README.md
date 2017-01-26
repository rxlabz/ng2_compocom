# Communication entre composants parent-enfant

## @Input

- parent -> enfant : @Input()

Définition d'une proprieté publique ou d'un setter(/getter) annotée `@Input()`

```typescript
@Component({
  selector: 'app-compo-enfant',/* ... */
})
export class CompoEnfantComponent {
  @Input() nom: string;
}
```

Les propriétés @Input peuvent être renseigné via l'attribut du même nom dans le template html du composant parent.

```html
<compo-enfant [nom]="nom" ></compo-enfant>
```


## @Output

- enfant -> parent : @Output()

Pour communiquer avec on parent, un composant peut utiliser des EventEmitter.
Les EventEmitters sont en fait des "sujets observables" : 
c'est un tuyau, ou plutôt un flux, que l'élement enfant expose pour envoyer des informations.

Les EventEmitters sont [génériques](), chacun doit donc typer les "events" qu'il emettra.
Il ne s'agit pas là d'évenements DOM, en fait, il s'agit tout simplement d'une donnée que l'on souhaite transmetre. 

```typescript
@Output() onNewString: EventEmitter<string> = new EventEmitter<string>();
```
Pour envoyer des données, aka ajouter des informations aux flux, un eventEmitter<T> expose une méthode next(param:T).

```typescript
//..
this.onNewString.next(text);
```

Pour se brancher aux flux, on ajoute un écouteur `(evenement)` dans le template parent.
Le handler de cet évenement a accès aux données envoyés via `$event`.  

```html
<compo-enfant (onNewString)="onNewText($event)"
                  (onNewMsg)="onNewMsg($event)"
></compo-enfant>
```

## Extras

### pipe

```typescript
{{msg.date | date}}
```


## Installation

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

```bash
npm install

ng serve
```