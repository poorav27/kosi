<?php

namespace Webkul\GDPR\Repositories;

use Webkul\Core\Eloquent\Repository;
use Webkul\GDPR\Contracts\GDPRDataRequest;

class GDPRDataRequestRepository extends Repository
{
    /**
     * Specify model class name.
     *
     * @return string
     */
    public function model()
    {
        return GDPRDataRequest::class;
    }
}
