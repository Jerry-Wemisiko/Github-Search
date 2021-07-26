import { NgModule } from "@angular/core";
// import { MatButtonToggle } from "@angular/material/button-toggle";
import { MatButtonToggleGroup } from "@angular/material/button-toggle";

@NgModule({
    imports:[
        MatButtonToggleGroup,
        // MatButtonToggle
    ],

    exports:[
        MatButtonToggleGroup,
        // MatButtonToggle
    ]

})

export  class Material { }