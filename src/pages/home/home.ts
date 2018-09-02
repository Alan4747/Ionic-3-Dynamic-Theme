import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	selectedTheme: String;

  constructor(	public navCtrl: NavController,
  				private settings: SettingsProvider) {
  				this.settings.getActiveTheme().subscribe(val =>this.selectedTheme = val );
  }	
  toggleAppTheme1(){
		console.log("theme 1");
		this.settings.setActiveTheme('dark-theme');

	}
	toggleAppTheme2(){
		console.log("theme 2");
  	this.settings.setActiveTheme('autumn-theme');
	}
		toggleAppTheme3(){
			console.log("theme 3");
			this.settings.setActiveTheme('neon-theme');
		
			}
		
	
  


}
