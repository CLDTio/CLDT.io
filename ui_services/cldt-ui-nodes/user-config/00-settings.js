/**
 * Copyright 2016 Jos.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function(RED) {
    "use strict";

    function CldtSettingsNode(n) {
        RED.nodes.createNode(this,n);

        this.steps = n.steps;
        this.range = n.range;
        this.frequency = n.frequency;

        var node = this;
        var msg = {};
        msg.payload = "Setting up cldt-settings node!";

        // send out the message to the rest of the workspace.
        // ... this message will get sent at startup so you may not see it in a debug node.
        this.send(msg);

        this.on('input', function (msg) {
            // No Inputs in this node, so msg should be null
            //TODO (jos) make sure that all fields have data
            var cldtConfig = {};
            cldtConfig.steps = node.steps;
            cldtConfig.range = node.range;
            cldtConfig.frequency = node.frequency;
            msg.payload = cldtConfig;
            node.send(msg);
            msg = null;
        });

        this.on("close", function() {
            // Nothign to clean up here
        });
    }

    RED.nodes.registerType("cldt-settings",CldtSettingsNode);
};
