$(function() {
    var $itemCache = $('#itemCache');
    var $dropBucket = $('#dropBucket');
    // make all the list-items in the item cache draggable
    $itemCache.find('li').draggable({
        revert: 'invalid',
        helper: 'clone',
        cursor: 'move'
    });
    // make the dropBucket droppable, accepting list-items from
    // the item cache
    $dropBucket.droppable({
        accept: '#itemCache > li',
        // on drop, we call a custom function, sending along the 
        // draggable item that was dropped
        drop: function(ev, ui) {
            transferItemTo(ui.draggable, $(this));
        }
    });
    
    /* Accepts a draggable item wrapped in jquery and transfers it
     */
    function transferItemTo($item, $bucket) {
        var $status = $('#status');
        $status.show();
        $item.fadeOut(function() {
            // ensure there is a list in the dropBucket
            var $bucketList = $bucket.find('ul');
            if (!$bucketList.length) {
                $bucketList = $('<ul class="itemListing"/>').appendTo($bucket);
            }
            $item.appendTo($bucketList).fadeIn();
        });
        var updateText = '"' + $item.find('h5')[0].textContent 
            + '" with id:"' + $item.context.id + '" is being transferred.';
        $status.html(updateText).fadeOut(2000);
    }
});