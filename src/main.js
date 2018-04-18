import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Haiku } from "./../src/haiku.js";

$(document).ready(function() {
  $("#haiku-form").submit(function(event){
    let line1 = $("#haiku-input-1").val();
    let line2 = $("#haiku-input-2").val();
    let line3 = $("#haiku-input-3").val();
    let newHaiku = new Haiku(line1, line2, line3);
    let result = newHaiku.isHaiku();
    $("#result").text(result);
    event.preventDefault();
  })
});
