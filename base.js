//Card Database w/ Text and images

var day_night_bool = 1
var card_offers = {}

//used in init to let people select characters in turn
function char_select(num_players){
    for(i = 0; i < num_players; i++){
        //print "Insert player number i character name"
        //receive player character name and ID character to i
    }
}

//used in init to start the card offer
function create_card_offer(num_players){
    for(i = 0; i < 3; i++){
        
    }
}

//used in init to setup round 1
function begin_round_1(num_players){
    for(i = 0; i < num_players; i++){
        //shuffle player deck
    }
    create_card_offer(num_players)
}

//used at begin round to rotate the card offers. Checks if gold units are introduced.
function rotate_card_offer(tile_revealed){

}

//used for every round except the first
function begin_round(num_players){
    for(i = 0; i < num_players; i++){
        //shuffle player deck
    }
    //////// This only necessary for boardstate when transfered to online
    // if(day_night_bool){
    //     //setup round as day
    //     day_night_bool = 0
    // }else{
    //     //setup round as night
    //     day_night_bool = 1
    // }
    ///////this section for rotating card offers


}

//init
function init(num_players){
    char_select(num_players)
    begin_round_1(num_players)
    begin_round(num_players)
}