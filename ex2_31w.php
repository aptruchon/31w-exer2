<?php
/**
 * Plugin Name: Extension exercice 2
 * Author: Alex Poulin Truchon
 * Description: Structure d'extension utilisant plusieurs dossiers et permettant d'afficher une adresse
 * Plugin URI: https://github.com/aptruchon/extension-31w
 */
function sh2_31w_enqueue()
{
    $version_css = filemtime(plugin_dir_path(__FILE__). "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__). "script/message.js");
    wp_enqueue_style("sh2_31w_css", plugin_dir_url(__FILE__). "/style.css", array(), "version_css");
    wp_enqueue_script("sh2_31w_js", plugin_dir_url(__FILE__). "script/message.js", array()," version_js", true);
};

add_action("wp_enqueue_scripts", "sh2_31w_enqueue");

function genere_article()
{
    $contenu = "<code class='code__article'>";
    $contenu .= "Afficher le contenu de l'article suivant";
    $contenu .= "</code>";
    $contenu .= "<button id='mon_bouton'>OK</button>";


    return $contenu;
}
add_shortcode("adr", "genere_article");