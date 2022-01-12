<?php

namespace Webkul\Core\Observers;

use Illuminate\Support\Facades\Storage;

class SliderObserver
{
    /**
     * Handle the Slider "deleted" event.
     *
     * @param  \Webkul\Core\Contracts\Slider $slider
     * @return void
     */
    public function deleted($slider)
    {
        Storage::disk(config('bagisto_filesystem.default'))->delete($slider->path);
    }
}