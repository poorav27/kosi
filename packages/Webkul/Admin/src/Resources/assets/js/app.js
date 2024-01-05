/**
 * This will track all the images and fonts for publishing.
 */
import.meta.glob(["../images/**", "../fonts/**"]);

/**
 * Main vue bundler.
 */
import { createApp } from "vue/dist/vue.esm-bundler";

/**
 * We are defining all the global rules here and configuring
 * all the `vee-validate` settings.
 */
import { configure, defineRule } from "vee-validate";
import { localize, setLocale } from "@vee-validate/i18n";
import ar from "@vee-validate/i18n/dist/locale/ar.json";
import bn from "@vee-validate/i18n/dist/locale/bn.json";
import de from "@vee-validate/i18n/dist/locale/de.json";
import en from "@vee-validate/i18n/dist/locale/en.json";
import es from "@vee-validate/i18n/dist/locale/es.json";
import fa from "@vee-validate/i18n/dist/locale/fa.json";
import fr from "@vee-validate/i18n/dist/locale/fr.json";
import he from "@vee-validate/i18n/dist/locale/he.json";
import hi_IN from "../locales/hi_IN.json";
import it from "@vee-validate/i18n/dist/locale/it.json";
import ja from "@vee-validate/i18n/dist/locale/ja.json";
import nl from "@vee-validate/i18n/dist/locale/nl.json";
import pl from "@vee-validate/i18n/dist/locale/pl.json";
import pt_BR from "@vee-validate/i18n/dist/locale/pt_BR.json";
import ru from "@vee-validate/i18n/dist/locale/ru.json";
import sin from "../locales/sin.json";
import tr from "@vee-validate/i18n/dist/locale/tr.json";
import uk from "@vee-validate/i18n/dist/locale/uk.json";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
import * as AllRules from '@vee-validate/rules';

/**
 * Registration of all global validators.
 */
Object.keys(AllRules).forEach(rule => {
    defineRule(rule, AllRules[rule]);
});

/**
 * This regular expression allows phone numbers with the following conditions:
 * - The phone number can start with an optional "+" sign.
 * - After the "+" sign, there should be one or more digits.
 *
 * This validation is sufficient for global-level phone number validation. If
 * someone wants to customize it, they can override this rule.
 */
defineRule("phone", (value) => {
    if (! value || ! value.length) {
        return true;
    }

    if (! /^\+?\d+$/.test(value)) {
        return false;
    }

    return true;
});

defineRule("decimal", (value, { decimals = '*', separator = '.' } = {}) => {
    if (value === null || value === undefined || value === '') {
        return true;
    }

    if (Number(decimals) === 0) {
        return /^-?\d*$/.test(value);
    }

    const regexPart = decimals === '*' ? '+' : `{1,${decimals}}`;
    const regex = new RegExp(`^[-+]?\\d*(\\${separator}\\d${regexPart})?([eE]{1}[-]?\\d+)?$`);

    return regex.test(value);
});

defineRule("required_if", (value, { condition = true } = {}) => {
    if (condition) {
        if (value === null || value === undefined || value === '') {
            return false;
        }
    }

    return true;
});

defineRule("", () => true);

configure({
    /**
     * Built-in error messages and custom error messages are available. Multiple
     * locales can be added in the same way.
     */
    generateMessage: localize({
        en: {
            ...en,
            messages: {
                ...en.messages,
                phone: "This {field} must be a valid phone number",
            },
        },

        ar: {
            ...ar,
            messages: {
                ...ar.messages,
                phone: "يجب أن يكون هذا {field} رقم هاتف صالحًا",
            },
        },

        bn: {
            ...bn,
            messages: {
                ...bn.messages,
                phone: "এই {field} একটি বৈধ ফোন নম্বর হতে হবে",
            },
        },

        de: {
            ...de,
            messages: {
                ...de.messages,
                phone: "Dieses {field} muss eine gültige Telefonnummer sein.",
            },
        },

        es: {
            ...es,
            messages: {
                ...es.messages,
                phone: "Este {field} debe ser un número de teléfono válido.",
            },
        },

        fa: {
            ...fa,
            messages: {
                ...fa.messages,
                phone: "این {field} باید یک شماره تلفن معتبر باشد.",
            },
        },

        fr: {
            ...fr,
            messages: {
                ...fr.messages,
                phone: "Ce {field} doit être un numéro de téléphone valide.",
            },
        },

        he: {
            ...he,
            messages: {
                ...he.messages,
                phone: "זה {field} חייב להיות מספר טלפון תקין.",
            },
        },

        hi_IN: {
            ...hi_IN,
            messages: {
                ...hi_IN.messages,
                phone: "यह {field} कोई मान्य फ़ोन नंबर होना चाहिए।",
            },
        },

        it: {
            ...it,
            messages: {
                ...it.messages,
                phone: "Questo {field} deve essere un numero di telefono valido.",
            },
        },

        ja: {
            ...ja,
            messages: {
                ...ja.messages,
                phone: "この{field}は有効な電話番号である必要があります。",
            },
        },

        nl: {
            ...nl,
            messages: {
                ...nl.messages,
                phone: "Dit {field} moet een geldig telefoonnummer zijn.",
            },
        },

        pl: {
            ...pl,
            messages: {
                ...pl.messages,
                phone: "To {field} musi być prawidłowy numer telefonu.",
            },
        },

        pt_BR: {
            ...pt_BR,
            messages: {
                ...pt_BR.messages,
                phone: "Este {field} deve ser um número de telefone válido.",
            },
        },

        ru: {
            ...ru,
            messages: {
                ...ru.messages,
                phone: "Это {field} должно быть действительным номером телефона.",
            },
        },

        sin: {
            ...sin,
            messages: {
                ...sin.messages,
                phone: "මෙම {field} වටේ වලංගු දුරකතන අංකය විය යුතුයි.",
            },
        },

        tr: {
            ...tr,
            messages: {
                ...tr.messages,
                phone: "Bu {field} geçerli bir telefon numarası olmalıdır.",
            },
        },

        uk: {
            ...uk,
            messages: {
                ...uk.messages,
                phone: "Це {field} повинно бути дійсним номером телефону.",
            },
        },

        zh_CN: {
            ...zh_CN,
            messages: {
                ...zh_CN.messages,
                phone: "这个 {field} 必须是一个有效的电话号码。",
            },
        },
    }),

    validateOnBlur: true,
    validateOnInput: true,
    validateOnChange: true,
});

/**
 * Main root application registry.
 */
window.app = createApp({
    data() {
        return {};
    },

    methods: {
        onSubmit() {},

        onInvalidSubmit() {},
    },
});

/**
 * Global plugins registration.
 */
import Admin from "./plugins/admin";
import Axios from "./plugins/axios";
import CreateElement from "./plugins/createElement";
import Emitter from "./plugins/emitter";
import Flatpickr from "./plugins/flatpickr";

[
    Admin,
    Axios,
    CreateElement,
    Emitter,
    Flatpickr,
].forEach((plugin) => app.use(plugin));

/**
 * Global components registration;
 */
import { Field, Form, ErrorMessage } from "vee-validate";
import Draggable from 'vuedraggable';

app.component("VForm", Form);
app.component("VField", Field);
app.component("VErrorMessage", ErrorMessage);
app.component("draggable", Draggable);

/**
 * Global directives.
 */
import Slugify from "./directives/slugify";
import SlugifyTarget from "./directives/slugify-target";
import Debounce from "./directives/debounce";
import Code from "./directives/code";

app.directive("slugify", Slugify);
app.directive("slugify-target", SlugifyTarget);
app.directive("debounce", Debounce);
app.directive("code", Code);

/**
 * Load event, the purpose of using the event is to mount the application
 * after all of our `Vue` components which is present in blade file have
 * been registered in the app. No matter what `app.mount()` should be
 * called in the last.
 */
window.addEventListener("load", function (event) {
    setLocale(document.documentElement.attributes.lang.value);

    app.mount("#app");
});
