<template>
    <div>
    <v-app-bar app color="white" class="pink--text " permanent elevate-on-scroll>
			<router-link :to="{ name: 'Home' }" class="mx-5">Baireando</router-link>
			<v-spacer></v-spacer>

			<div class="botones_Nav">
				<router-link :to="{ name: 'Login' }">
					<v-btn><v-icon color="pink"> mdi-account</v-icon></v-btn>
				</router-link>
				<router-link :to="{ name: 'Carrito' }">
					<v-btn> <v-icon color="pink"> mdi-cart</v-icon></v-btn>
				</router-link>
			</div>
		</v-app-bar>
        
    </div>
</template>