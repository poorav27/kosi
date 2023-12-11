{!! view_render_event('bagisto.admin.catalog.product.edit.before', ['product' => $product]) !!}

<v-appointment-booking></v-appointment-booking>

{!! view_render_event('bagisto.admin.catalog.product.edit.after', ['product' => $product]) !!}


@push('scripts')
    <script
        type="text/x-template"
        id="v-appointment-booking-template"
    >
        <x-admin::form
            enctype="multipart/form-data"
            method="PUT"
        >
            <div>
                 <!-- Slot Duration -->
                 <x-admin::form.control-group class="w-full mb-[10px]">
                    <x-admin::form.control-group.label class="required">
                        @lang('booking::app.admin.catalog.products.edit.type.booking.slot-duration')
                    </x-admin::form.control-group.label>

                    <x-admin::form.control-group.control
                        type="text"
                        name="booking[duration]"
                        v-model="appointment_booking.duration"
                        :label="trans('booking::app.admin.catalog.products.edit.type.booking.slot-duration')"
                        required="required|min_value:1"
                    >
                    </x-admin::form.control-group.control>

                    <x-admin::form.control-group.error 
                        control-name="booking[duration]"
                    >
                    </x-admin::form.control-group.error>
                </x-admin::form.control-group>

                <!-- Break Time -->
                <x-admin::form.control-group class="w-full mb-[10px]">
                    <x-admin::form.control-group.label class="required">
                        @lang('booking::app.admin.catalog.products.edit.type.booking.break-duration')
                    </x-admin::form.control-group.label>

                    <x-admin::form.control-group.control
                        type="text"
                        name="booking[break_time]"
                        v-model="appointment_booking.break_time"
                        :label="trans('booking::app.admin.catalog.products.edit.type.booking.break-duration')"
                        required="required|min_value:1"
                    >
                    </x-admin::form.control-group.control>

                    <x-admin::form.control-group.error 
                        control-name="booking[break_time]"
                    >
                    </x-admin::form.control-group.error>
                </x-admin::form.control-group>

                 <!-- Same slot for all days -->
                 <x-admin::form.control-group class="w-full mb-[10px]">
                    <x-admin::form.control-group.label class="required">
                        @lang('booking::app.admin.catalog.products.edit.type.booking.same-slot-for-all-days.title')
                    </x-admin::form.control-group.label>

                    <x-admin::form.control-group.control
                        type="select"
                        name="booking[same_slot_all_days]"
                        rules="required"
                        v-model="appointment_booking.same_slot_all_days"
                        :label="trans('booking::app.admin.catalog.products.edit.type.booking.same-slot-for-all-days.title')"
                    >
                        <option value="1">
                            @lang('booking::app.admin.catalog.products.edit.type.booking.same-slot-for-all-days.yes')
                        </option>

                        <option value="0">
                            @lang('booking::app.admin.catalog.products.edit.type.booking.same-slot-for-all-days.no')
                        </option>
                    </x-admin::form.control-group.control>

                    <x-admin::form.control-group.error 
                        control-name="booking[same_slot_all_days]"
                    >
                    </x-admin::form.control-group.error>
                </x-admin::form.control-group>

                 <!-- Slots Component -->
                 <div class="flex gap-[20px] justify-between p-[16px]">
                    <div class="flex flex-col gap-[8px]">
                        <p class="text-[16px] text-gray-800 dark:text-white font-semibold">
                            @lang('booking::app.admin.catalog.products.edit.type.booking.slots.title')
                        </p>
                    </div>
                </div>

                <slot-list
                    booking-type="appointment_slot"
                    :same-slot-all-days="appointment_booking.same_slot_all_days">
                </slot-list>
            </div>
        </x-admin::form>
    </script>

    <script type="module">
        app.component('v-appointment-booking', {
            template: '#v-appointment-booking-template',

            props: ['bookingProduct'],

            data: function() {
                return {
                    appointment_booking: this.bookingProduct && this.bookingProduct.appointment_slot ? this.bookingProduct.appointment_slot : {
                        duration: 45,

                        break_time: 15,

                        same_slot_all_days: 1,

                        slots: []
                    }
                }
            }
        });
    </script>
@endpush