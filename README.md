
# IgyTemplatesModules

# INSTALLATION

1. copier ***igy-templates-modules*** dans le répértoire **node_modules**

2. importer ***IgyTemplatesModulesModule*** dans **app.module.test**

```typescript
import { IgyTemplatesModulesModule } from 'igy-templates-modules'
@NgModule({
	imports: [
		IgyTemplatesModulesModule,
		...
	],
	providers: [],
	bootstrap: [AppComponent]
})
```
3. Importer styles ***"./node_modules/@angular/material/prebuilt-themes/indigo-pink.css" dans angular.json***

4. Importer styles ***"./node_modules/bootstrap/dist/css/bootstrap.min.css" dans angular.json***

5. Importer styles ***"./node_modules/igy-templates-modules/assets/sass/app.scss" dans angular.json***
```typescript
"styles": [
	"src/styles.scss",
	"./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
	"./node_modules/igy-templates-modules/assets/sass/app.scss",
	"./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```
# DEPENDENCES

```typescript
"@angular/material": "^13.2.4" 
```

```typescript
"bootstrap": "^5.1.3"
```

```typescript
"material-icons": "^1.10.7"
```

