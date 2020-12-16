<?php

namespace Webkul\Communication\Providers;

use Webkul\Core\Providers\CoreModuleServiceProvider;

class ModuleServiceProvider extends CoreModuleServiceProvider
{
    protected $models = [
        \Webkul\Communication\Models\NewsletterTemplate::class,
        \Webkul\Communication\Models\NewsletterQueue::class,
    ];
}