/**
 * Created by dufourau on 6/12/14.
 */

define([
    'handlebars',
    'backbone.marionette',
    'views/objects/object',
    'text!templates/views/workspace/mouse.html'
], function(Handlebars, Marionette, ObjectView, Objetcs_mouse_tpl){

    /**
     * Mouse view
     */
    var mouseView = ObjectView.extend({
        template: Handlebars.default.compile(Objetcs_mouse_tpl)

    });

    return mouseView;
});