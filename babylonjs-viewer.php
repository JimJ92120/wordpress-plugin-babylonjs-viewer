<?php
/**
 * Plugin Name:         Babylon.js Viewer
 * 
 * Description:         Allow users to view and add 3D models to their content with Babylon.js Viewer.
 * Author:              JimJ92120
 * Author URI:          https://github.com/JimJ92120
 * 
 * Version:             0.1.0
 * Requires at least:   5.9
 * Requires PHP:        7.4
 */

add_action('init', function() {
    register_block_type(
        plugin_dir_path(__FILE__) . 'build/babylonjs-viewer'
    );
});
