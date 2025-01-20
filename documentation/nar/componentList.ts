// ! Fold All folds all regions Ctrl + (K + 0(zero))
// ! Unfold All folds all regions Ctrl + (K + J)

//#region JS Section
var componentOptions = {
    VAlert: {
        qValue: {
            type: Boolean
        },
        border: {
            type: String,
            options: ["'left'"]
        },
        class: {
            type: String
        },
        color: {
            editorDefaultValue: "'warning'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        closeIcon: {
            type: String,
            editorDefaultValue: "'mdi-close'"
        },
        closeLabel: {
            type: String
        },
        coloredBorder: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        dismissible: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        elevation: {
            type: String,
            editorDefaultValue: "4",
            options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]
        },
        icon: {
            type: String,
            editorDefaultValue: "'mdi-check-circle'",
            options: ["'mdi-information'", "'mdi-check-circle'", "'mdi-alert-circle'", "'mdi-close-circle'"]
        },
        type: {
            type: String
        },
        mode: {
            type: String
        },
        origin: {
            type: String
        },
        prominent: {
            type: Boolean
        },
        tag: {
            type: String
        },
        tile: {
            type: Boolean
        },
        text: {
            type: Boolean
        },
        transition: {
            type: String
        }
    },
    VAutocomplete: {
        qValue: {
            type: "any"
        },
        autofocus: {
            type: Boolean
        },
        autoSelectFirst: {
            type: Boolean
        },
        class: {
            type: String
        },
        clearIcon: {
            type: String
        },
        clearable: {
            type: Boolean
        },
        counter: {
            type: "boolean | string | number"
        },
        counterValue: {
            type: Function
        },
        disabled: {
            type: Boolean
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        filter: {
            type: Function
        },
        hideDetails: {
            type: "string | boolean"
        },
        hideNoData: {
            type: Boolean
        },
        hideSelected: {
            type: Boolean
        },
        itemDisabled: {
            type: "string | Array<any> | Function"
        },
        internalSearch: {
            type: "string"
        },
        items: {
            type: "Array<any>"
        },
        itemText: {
            type: "string | Array<any> | Function"
        },
        itemValue: {
            type: "string | Array<any> | Function"
        },
        label: {
            type: String
        },
        loading: {
            type: "boolean | string"
        },
        menuProps: {
            type: "{maxHeight: number}"
        },
        multiple: {
            type: Boolean
        },
        noFilter: {
            type: Boolean
        },
        prefix: {
            type: String
        },
        placeholder: {
            type: String
        },
        rules: {
            type: "Array<any>"
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        suffix: {
            type: String
        },
        smallChips: {
            type: Boolean
        },
        validateOnBlur: {
            type: Boolean
        }
    },
    VAvatar: {
        class: {
            type: String,
                editorDefaultValue: "'primary'"
        },
        color: {
            editorDefaultValue: "'primary'"
        },
        height: {
            type: "number | string"
        },
        left: {
            type: Boolean
        },
        right: {
            type: Boolean
        },
        size: {
            type: "number | string"
        },
        icon: {
            type: String,
            editorDefaultValue: "'mdi-account'"
        },
        tile: {
            type: Boolean
        }
    },
    VBadge: {
        qValue: {
            type: Boolean
        },
        bordered: {
            type: Boolean
        },
        bottom: {
            type: Boolean
        },
        class: {
            type: String
        },
        content: {
            type: String
        },
        icon: {
            type: String,
            editorDefaultValue: "'mdi-account'"
        },
        left: {
            type: Boolean
        },
        label: {
            editorDefaultValue: "'My CheckBox'"
        },
        mode: {
            type: String
        },
        offsetX: {
            type: "string | number"
        },
        offsetY: {
            type: "string | number"
        },
        origin: {
            type: String
        },
        overlap: {
            type: Boolean
        },
        tile: {
            type: Boolean
        },
        transition: {
            type: String
        }
    },
    VBottomNavigation: {
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        fixed: {
            type: Boolean
        },
        grow: {
            type: Boolean
        },
        hideOnScroll: {
            type: Boolean
        },
        horizontal: {
            type: Boolean
        },
        mandatory: {
            type: Boolean
        },
        scrollTarget: {
            type: String
        },
        scrollThreshold: {
            type: "string | number"
        },
        shift: {
            type: Boolean
        }
    },
    VBottomSheet: {
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        scrollable: {
            type: Boolean,
            editorDefaultValue: "false"
        }
    },
    VBreadcrumbs: {
        divider: {
            type: String
        },
        items: {
            type: "Array<any>",
            editorDefaultValue: "[{text = 'Dashboard', disabled = false, href = 'breadcrumbs_dashboard'}, {text = 'Google', disabled = false, href = 'https://www.google.com', exact = true, target ='_blank'}, {text = 'Link 1', disabled = true, href = 'breadcrumbs_link_1'}]"
        },
        large: {
            type: Boolean
        }
    },
    VBreadcrumbsItem: {
        class: {
            type: String
        },
        append: {
            type: Boolean
        },
        exact: {
            type: Boolean
        },
        href: {
            type: "object | string"
        },
        link: {
            type: Boolean
        },
        replace: {
            type: Boolean
        },
        ripple: {
            type: "object | string"
        },
        tag: {
            type: String
        },
        target: {
            type: String
        },
        to: {
            type: "object | string"
        }
    },
    VBtn: {
        absolute: {
            type: Boolean
        },
        appendIcon: {
            type: String
        },
        block: {
            type: Boolean
        },
        bottom: {
            type: Boolean
        },
        class: {
            type: String,
                runTimeOverrideValue: {
                    type: "Append",
                    value: "sftt-btn-grd"
                },
                options: ["'sftt-btn-grd'"]
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        depressed: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        fab: {
            type: Boolean
        },
        fixed: {
            type: Boolean
        },
        height: {
            type: "number | string"
        },
        href: {
            type: "string | object"
        },
        icon: {
            type: Boolean
        },
        inputValue: {
            type: String
        },
        link: {
            type: Boolean
        },
        loading: {
            type: Boolean
        },
        raised: {
            type: Boolean
        },
        outlined: {
            type: Boolean
        },
        regular: {
            type: Boolean
        },
        prependInnerIcon: {
            type: String
        },
        large: {
            type: Boolean
        },
        left: {
            type: Boolean
        },
        replace: {
            type: Boolean
        },
        retainFocusOnClick: {
            type: Boolean
        },
        right: {
            type: Boolean
        },
        ripple: {
            type: "boolean | object"
        },
        tag: {
            type: String
        },
        tile: {
            type: Boolean
        },
        to: {
            type: "string | object"
        },
        top: {
            type: Boolean
        },
        type: {
            type: String
        },
        xLarge: {
            type: Boolean
        },
        xSmall: {
            type: Boolean
        },
        width: {
            type: "number | string"
        }
    },
    VBtnToggle: {
        qValue: {
            type: "any"
        },
        borderless: {
            type: Boolean
        },
        class: {
            type: String
        },
        dense: {
            type: Boolean
        },
        group: {
            type: Boolean
        },
        mandatory: {
            type: Boolean
        },
        max: {
            type: "number | string"
        },
        multiple: {
            type: Boolean
        },
        tile: {
            type: Boolean
        },
        activeClass: {
            type: String
        },
        backgroundColor: {
            type: String
        }
    },
    VCard: {
        class: {
            type: String
        },
        append: {
            type: Boolean
        },
        hover: {
            type: Boolean
        },
        href: {
            type: "string | object"
        },
        img: {
            type: String
        },
        link: {
            type: Boolean
        },
        loading: {
            type: "string | boolean"
        },
        raised: {
            type: Boolean
        },
        shaped: {
            type: Boolean
        },
        tag: {
            type: String
        },
        to: {
            type: "string | object"
        },
        outlined: {
            type: Boolean
        },
        elevation: {
            type: String,
            options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]
        },
        height: {
            type: String
        },
        color: {
            editorDefaultValue: "",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
    },
    VCarousel: {
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        continuous: {
            type: Boolean
        },
        cycle: {
            type: Boolean
        },
        height: {
            type: String
        },
        hideDelimiterBackground: {
            type: Boolean
        },
        hideDelimiters: {
            type: Boolean
        },
        interval: {
            type: "number | string"
        },
        showArrows: {
            type: Boolean
        },
        showArrowsOnHover: {
            type: Boolean
        },
        vertical: {
            type: Boolean
        },
        verticalDelimiters: {
            type: String
        },


    },
    VCarouselItem: {
        qValue: {
            type: "any"
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        href: {
            type: "string | object"
        },
        link: {
            type: Boolean
        },


    },
    VCheckbox: {
        qValue: {
            type: Boolean
        },
        class: {
            type: String,
                runTimeOverrideValue: {
                    type: "Append",
                    value: "mt-1"
                }
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        indeterminateIcon: {
            type: String
        },
        inputValue: {
            type: "any"
        },
        label: {
            editorDefaultValue: "'My CheckBox'"
        },
        loading: {
            type: "boolean | string"
        },
        multiple: {
            type: Boolean
        },
        offIcon: {
            type: String
        },
        onIcon: {
            type: String
        },
        hint: {
            type: String
        },
        ripple: {
            type: "boolean | object"
        },
        rules: {
            type: "Array<any>"
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        validateOnBlur: {
            type: Boolean,
            // default: false
        }
    },
    VChip: {
        class: {
            type: String
        },
        active: {
            type: Boolean
        },
        append: {
            type: Boolean
        },
        close: {
            type: Boolean
        },
        draggable: {
            type: Boolean
        },
        exact: {
            type: Boolean
        },
        filter: {
            type: Boolean
        },
        filterIcon: {
            type: String
        },
        href: {
            type: "string | object"
        },
        label: {
            type: Boolean
        },
        link: {
            type: Boolean
        },
        large: {
            type: Boolean
        },
        pill: {
            type: Boolean
        },
        replace: {
            type: Boolean
        },
        ripple: {
            type: "boolean | object"
        },
        tag: {
            type: String
        },
        to: {
            type: "string | object"
        },
        small: {
            type: Boolean
        },
        xSmall: {
            type: Boolean
        },
        xLarge: {
            type: Boolean
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'default'", "'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        closeIcon: {
            type: String,
            options: ["'mdi-delete'", "'mdi-close'", "'mdi-close-circle'"]
        },
        outlined: {
            type: Boolean
        }
    },
    VCombobox: {
        qValue: {
            type: "any"
        },
        allowOverflow: {
            type: Boolean
        },
        appendIcon: {
            type: String
        },
        attach: {
            type: Boolean,
            runTimeDefaultValue: true,
            runTimeOverrideValue: true
        },
        autoSelectFirst: {
            type: Boolean
        },
        autofocus: {
            type: Boolean
        },
        cacheItems: {
            type: Boolean
        },
        chips: {
            type: Boolean
        },
        class: {
            type: String,
                runTimeOverrideValue: {
                    type: "Append",
                    value: "pt-0"
                }
        },
        clearIcon: {
            type: String
        },
        clearable: {
            type: Boolean
        },
        counter: {
            type: "boolean | string | number"
        },
        counterValue: {
            type: Function
        },
        deletableChips: {
            type: Boolean
        },
        dense: {
            type: Boolean,
            editorDefaultValue: "true",
            runTimeDefaultValue: true,
            runTimeOverrideValue: true
        },
        delimiters: {
            type: "Array<any>"
        },
        disabled: {
            type: Boolean
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        format: {
            type: String
        },
        formatValues: {
            type: "Array<any>"
        },
        filter: {
            type: Function
        },
        hideDetails: {
            type: "string | boolean"
        },
        hideNoData: {
            type: Boolean
        },
        hideSelected: {
            type: Boolean
        },
        hint: {
            type: String
        },
        itemDisabled: {
            type: "string | Array<any> | Function"
        },
        itemText: {
            type: "string | Array<any> | Function"
        },
        itemValue: {
            type: "string | Array<any> | Function"
        },
        label: {
            editorDefaultValue: "'My Combobox'"
        },
        items: {
            editorDefaultValue: "[{text = 'test1', value = 1}, { text = 'test2', value = 2}]"
        },
        loading: {
            type: "boolean | string"
        },
        menuProps: {
            type: "string | object | Array<any>"
        },
        multiple: {
            type: Boolean
        },
        noDataText: {
            type: String
        },
        noFilter: {
            type: Boolean
        },
        openOnClear: {
            type: Boolean
        },
        outlined: {
            type: Boolean,
            editorDefaultValue: "true",
            runTimeDefaultValue: true,
            runTimeOverrideValue: true
        },
        persistentHint: {
            type: Boolean
        },
        placeholder: {
            type: String
        },
        prefix: {
            type: String
        },
        prependInnerIcon: {
            type: String
        },
        rules: {
            type: "Array<any>"
        },
        searchInput: {
            type: String
        },
        singleLine: {
            type: Boolean
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        suffix: {
            type: String
        },
        validateOnBlur: {
            type: Boolean
        }
    },
    VCol: {
        class: {
            type: String,
                runTimeOverrideValue: {
                    type: "Append",
                    value: "pb-0"
                }
        }
    },
    VContainer: {
        class: {
            type: String,
                runTimeOverrideValue: {
                    type: "Append",
                    value: "container container--fluid"
                }
        }
    },
    VDataIterator: {
        qValue: {
            type: "Array<any>"
        },
        class: {
            type: String
        },
        disabled: {
            type: Boolean
        }
    },
    VDataTable: {
        qValue: {
            type: "Array<any>"
        },
        CompareDataField: {
            type: String
        },
        caption: {
            type: String
        },
        class: {
            type: String
        },
        customFilter: {
            type: Function
        },
        customGroup: {
            type: Function
        },
        customSort: {
            type: Function
        },
        disableFiltering: {
            type: Boolean
        },
        disablePagination: {
            type: Boolean
        },
        disableSort: {
            type: Boolean
        },
        expandIcon: {
            type: String
        },
        expanded: {
            type: "Array<any>",
        },
        fixedHeader: {
            type: Boolean
        },
        footerProps: {
            editorDefaultValue: "{showFirstLastPage = true, firstIcon = 'mdi-arrow-collapse-left', lastIcon = 'mdi-arrow-collapse-right', prevIcon = 'mdi-minus', nextIcon = 'mdi-plus'}"
        },
        groupBy: {
            type: "Array<any> | boolean"
        },
        headers: {
            editorDefaultValue: "[{ text = 'Dessert (100g serving)', align= 'start', sortable= false, value= 'name'}, { text = 'Calories', value= 'calories', sortable = true }, { text = 'Fat (g)', value= 'fat' }, { text = 'Carbs (g)', value= 'carbs' }, { text = 'Protein (g)', value= 'protein' }, { text = 'Iron (%)', value= 'iron' }]"
        },
        headerProps: {
            type: Object
        },
        hideDefaultFooter: {
            type: Boolean,
        },
        hideDefaultHeader: {
            type: Boolean
        },
        itemClass: {
            type: "string | Function"
        },
        itemKey: {
            type: String
        },
        items: {
            editorDefaultValue: "[{name = 'Frozens Yogurt', calories = 159, fat = '6.0', carbs = 24, protein = '4.0', iron = '1%'}, {name = 'Ice cream sandwich', calories = 237, fat = '9.0', carbs = 37, protein = '4.3', iron = '1%'}, {name = 'Eclair', calories = 262, fat = '16.0', carbs = 23, protein = '6.0', iron = '7%'}, {name = 'Cupcake', calories = 305, fat = '3.7', carbs = 67, protein = '4.3', iron = '8%'}, {name = 'Gingerbread',calories = 356, fat = '16.0', carbs = 49, protein = '3.9', iron = '16%'}, {name = 'Jelly bean', calories = 375,  fat = '0.0', carbs = 94, protein = '0.0', iron = '0%'}, {name = 'Lollipop', calories = 392, fat = '0.2', carbs = 98, protein = '0.0', iron = '2 %'}, {name = 'Honeycomb', calories = 408, fat = '3.2', carbs = 87, protein = '6.5', iron = '45%'}, {name = 'Donut', calories = 452, fat = '25.0', carbs = 51, protein = '4.9', iron = '22%'}, {name = 'KitKat', calories = 518, fat = '26.0', carbs = 65, protein = '7', iron=  '6 %'}]"
        },
        itemsPerPage: {
            editorDefaultValue: "5"
        },
        loading: {
            type: "string | boolean",
        },
        locale: {
            type: String
        },
        multiSort: {
            type: Boolean,
        },
        noDataText: {
            type: String,
        },
        noResultText: {
            type: String
        },
        options: {},
        page: {
            type: Number
        },
        search: {
            type: String
        },
        selectableKey: {
            type: String
        },
        serverItemsLength: {
            type: Number
        },
        showExpand: {
            type: Boolean
        },
        showGroupBy: {
            type: Boolean
        },
        showSelect: {
            type: Boolean
        },
        singleExpand: {
            type: Boolean
        },
        singleSelect: {
            type: Boolean
        },
        sortBy: {
            type: "string | Array<any>"
        }
    },
    VDatePicker: {
        qValue: {
            type: "Array<any> | string",
            editorDefaultValue: "Date.now().toFormattedString('YYYY-MM-DD')"
        },
        allowedDates: {
            type: "Array<any>"
        },
        dayFormat: {
            type: String
        },
        eventColor: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        events: {
            type: "Array<any>"
        },
        firstDayOfWeek: {
            editorDefaultValue: "1"
        },
        headerDateFormat: {
            type: String
        },
        landscape: {
            type: Boolean
        },
        locale: {
            editorDefaultValue: "'tr-tr'"
        },
        localeFirsDayOfYear: {
            type: "number | string"
        },
        max: {
            type: String
        },
        min: {
            type: String
        },
        monthFormat: {
            type: Function
        },
        multiple: {
            type: Boolean
        },
        nextIcon: {
            type: String
        },
        prevIcon: {
            type: String
        },
        noTitle: {
            type: Boolean
        },
        pickerDate: {
            type: String
        },
        range: {
            type: Boolean
        },
        reactive: {
            type: Boolean
        },
        scrollable: {
            type: Boolean
        },
        selectedItemsText: {
            type: String
        },
        showCurrent: {
            type: "string | boolean"
        },
        showWeek: {
            type: Boolean
        },
        titleDateFormat: {
            type: Function
        },
        type: {
            type: String
        }
    },
    VDialog: {
        qValue: {
            type: Boolean
        },
        class: {
            type: String
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        fullscreen: {
            type: Boolean
        },
        hideOverlay: {
            type: Boolean
        },
        internalActivator: {
            type: Boolean
        },
        noClickAnimation: {
            type: Boolean
        },
        openOnHover: {
            type: Boolean
        },
        origin: {
            type: String
        },
        overlayColor: {
            type: String
        },
        overlayOpacity: {
            type: "string | number"
        },
        persistent: {
            type: Boolean
        },
        retainFocus: {
            type: Boolean
        },
        scrollable: {
            type: Boolean
        },
        transition: {
            type: "string | boolean"
        },
        width: {
            type: Number,
            editorDefaultValue: "500",
        }
    },
    VDivider: {
        class: {
            type: String
        },
        inset: {
            type: Boolean
        },
        vertical: {
            type: Boolean,
        }
    },
    VEditDialog: {
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        returnValue: {
            type: "string | object"
        }
    },
    VExpansionPanel: {
        accordion: {
            type: Boolean
        },
        activeClass: {
            type: String,
        },
        class: {
            type: String
        },
        flat: {
            type: Boolean
        },
        readonly: {
            type: Boolean
        }
    },
    VExpansionPanelContent: {
        class: {
            type: String
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        }
    },
    VExpansionPanelHeader: {
        class: {
            type: String,
        },
        color: {
            type: String,
        },
        disabledIconRotate: {
            type: Boolean,
        },
        expandIcon: {
            type: Boolean,
        },
        hideActions: {
            type: Boolean,
        },
        ripple: {
            type: "boolean | object",
        }
    },
    VExpansionPanels: {
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        accordion: {
            type: Boolean
        },
        focusable: {
            type: Boolean
        },
        hover: {
            type: Boolean
        },
        inset: {
            type: Boolean
        },
        mandatory: {
            type: Boolean
        },
        max: {
            type: "string | number"
        },
        multiple: {
            type: Boolean
        },
        popout: {
            type: Boolean
        },
        tile: {
            type: Boolean
        }
    },
    VFileInput: {
        accept: {
            type: String
        },
        appendIcon: {
            type: String
        },
        chips: {
            type: Boolean
        },
        class: {
            type: String,
                runTimeOverrideValue: {
                    type: "Append",
                    value: "pt-0"
                }
        },
        clearIcon: {
            type: String
        },
        clearable: {
            type: Boolean
        },
        counter: {
            type: "boolean | string | number"
        },
        counterSizeString: {
            type: String
        },
        dense: {
            type: Boolean,
            editorDefaultValue: "true",
            runTimeOverrideValue: true
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "string | number"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        hideInput: {
            type: Boolean
        },
        hint: {
            type: String
        },
        label: {
            type: String
        },
        loading: {
            type: "boolean | string"
        },
        multiple: {
            type: Boolean
        },
        outlined: {
            type: Boolean,
            editorDefaultValue: "true",
            runTimeDefaultValue: true,
            runTimeOverrideValue: true
        },
        placeholder: {
            type: String,
            editorDefaultValue: "'Select a file(Placeholder)'"
        },
        prefix: {
            type: String
        },
        prependIcon: {
            type: String,
            editorDefaultValue: null,
            runTimeOverrideValue: null
        },
        prependInnerIcon: {
            type: String
        },
        rules: {
            type: "Array<any>"
        },
        suffix: {
            type: String
        },
        showSize: {
            type: "boolean | number"
        },
        smallChips: {
            type: Boolean
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        truncateLength: {
            type: "string | number"
        },
        validateOnBlur: {
            type: Boolean
        }
    },
    VFooter: {
        absolute: {
            type: Boolean
        },
        color: {
            type: String
        },
        class: {
            type: String
        },
        fixed: {
            type: Boolean
        },
        inset: {
            type: Boolean
        },
        padless: {
            type: Boolean
        },
        tag: {
            type: String
        },
        tile: {
            type: Boolean
        },
        width: {
            type: String
        }
    },
    VForm: {
        qValue: {
            type: Boolean
        },
        class: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        validate: {
            type: Function
        }
    },
    VIcon: {
        class: {
            type: String
        },
        color: {
            type: String
        },
        dense: {
            type: Boolean
        },
        large: {
            type: Boolean
        },
        left: {
            type: Boolean
        },
        right: {
            type: Boolean
        },
        size: {
            type: "string | number"
        },
        small: {
            type: Boolean
        },
        tag: {
            type: String
        },
        text: {
            type: String,
            editorDefaultValue: "'mdi-home'"
        },
        xSmall: {
            type: Boolean
        },
        xLarge: {
            type: Boolean
        }
    },
    VImg: {
        class: {
            type: String
        },
        alt: {
            type: String
        },
        aspectRatio: {
            type: "string | number"
        },
        contain: {
            type: Boolean
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        height: {
            type: "string | number",
            editorDefaultValue: "'50'"
        },
        lazySrc: {
            type: String
        },
        maxHeight: {
            type: "string | number"
        },
        maxWidth: {
            type: "string | number"
        },
        minHeight: {
            type: "string | number"
        },
        minWidth: {
            type: "string | number"
        },
        options: {
            type: Object
        },
        position: {
            type: String
        },
        sizes: {
            type: String
        },
        src: {
            type: "string | object",
            editorDefaultValue: "'https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Image-01-512.png'"
        },
        srcset: {
            type: String
        },
        transition: {
            type: "string | boolean"
        },
        width: {
            type: "string | number",
            editorDefaultValue: "'50'"
        }
    },
    VInlineDatepicker: {
        outlined: {
            type: Boolean,
            editorDefaultValue: "true",
            runTimeOverrideValue: true
        },
        dense: {
            type: Boolean,
            editorDefaultValue: "true",
            runTimeOverrideValue: true
        },
        willAttach: {
            type: Boolean,
            runTimeOverrideValue: false,
            runTimeDefaultValue: false
        }
    },
    VInlineTimePicker: {
        outlined: {
            type: Boolean,
            editorDefaultValue: "true",
            runTimeOverrideValue: true
        },
        dense: {
            type: Boolean,
            editorDefaultValue: "true",
            runTimeOverrideValue: true
        },
        willAttach: {
            type: Boolean,
            runTimeOverrideValue: false,
            runTimeDefaultValue: false
        }
    },
    VList: {
        class: {
            type: String
        },
        dense: {
            type: Boolean
        },
        expand: {
            type: Boolean
        },
        subheader: {
            type: Boolean
        },
        tag: {
            type: String
        },
        threeLine: {
            type: Boolean
        },
        tile: {
            type: Boolean
        },
        twoLine: {
            type: Boolean,
        }
    },
    VListGroup: {
        qValue: {
            type: "any"
        },
        appendIcon: {
            type: String
        },
        class: {
            type: String
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        group: {
            type: String
        },
        noAction: {
            type: Boolean
        },
        prependIcon: {
            type: String
        },
        subGroup: {
            type: Boolean
        }
    },
    VListItem: {
        append: {
            type: Boolean
        },
        class: {
            type: String
        },
        dense: {
            type: Boolean
        },
        exact: {
            type: Boolean
        },
        href: {
            type: "string | object"
        },
        inactive: {
            type: Boolean
        },
        link: {
            type: Boolean
        },
        tag: {
            type: String
        },
        target: {
            type: String
        },
        threeLine: {
            type: Boolean
        },
        to: {
            type: Boolean
        },
        twoLine: {
            type: Boolean
        }
    },
    VListItemContent: {
        class: {
            type: String
        }
    },
    VListItemGroup: {
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        mandatory: {
            type: Boolean
        },
        multiple: {
            type: Boolean
        }
    },
    VMenu: {
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        closeOnContentClick: {
            type: Boolean
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        minWidth: {
            type: String
        },
        offsetY: {
            type: Boolean
        },
        returnValue: {
            type: String
        },
        transition: {
            type: String
        }
    },
    VNavigationDrawer: {
        qValue: {
            type: "any"
        },
        bottom: {
            type: Boolean
        },
        class: {
            type: String
        },
        clipped: {
            type: Boolean
        },
        disableResizeWatcher: {
            type: Boolean
        },
        right: {
            type: Boolean,
        },
        absolute: {
            type: Boolean,
        },
        permanent: {
            type: Boolean,
        },
        expandOnHover: {
            type: Boolean
        },
        fixed: {
            type: Boolean
        },
        width: {
            type: String
        }
    },
    VOverflowBtn: {
        qValue: {
            type: "any"
        },
        allowOverflow: {
            type: Boolean
        },
        appendIcon: {
            type: String
        },
        autoSelectFirst: {
            type: Boolean
        },
        autofocus: {
            type: Boolean
        },
        chips: {
            type: Boolean
        },
        cacheItems: {
            type: Boolean
        },
        class: {
            type: String
        },
        clearIcon: {
            type: String
        },
        clearable: {
            type: Boolean
        },
        counter: {
            type: "boolean | string | number"
        },
        counterValue: {
            type: Function
        },
        deletableChips: {
            type: Boolean
        },
        editable: {
            type: Boolean
        },
        eager: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        filter: {
            type: Function
        },
        hint: {
            type: String
        },
        itemDisabled: {
            type: "string | Array<any> | Function"
        },
        itemText: {
            type: "string | Array<any> | Function"
        },
        itemValue: {
            type: "string | Array<any> | Function"
        },
        items: {
            type: "Array<any>"
        },
        label: {
            type: String
        },
        loading: {
            type: "boolean | string"
        },
        menuProps: {
            type: "string | object | Array<any>"
        },
        multiple: {
            type: Boolean
        },
        openOnClear: {
            type: Boolean
        },
        prependInnerIcon: {
            type: String
        },
        rules: {
            type: "Array<any>"
        },
        searchInput: {
            type: String
        },
        segmented: {
            type: Boolean
        },
        smallChips: {
            type: Boolean
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        validateOnBlur: {
            type: Boolean,
            // default: false

        }
    },
    VOverlay: {
        qValue: {
            type: "any"
        },
        absolute: {
            type: Boolean
        },
        class: {
            type: String
        },
        opacity: {
            type: "number | string"
        },
        zIndex: {
            type: "number | string"
        }
    },
    VPagination: {
        qValue: {
            type: Number
        },
        circle: {
            type: Boolean
        },
        class: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        length: {
            type: String,
            editorDefaultValue: "'5'"
        },
        nextIcon: {
            type: String
        },
        prevIcon: {
            type: String
        },
        totalVisible: {
            type: "string | number"
        }
    },
    VParallax: {
        alt: {
            type: String
        },
        class: {
            type: String
        },
        src: {
            type: String,
            editorDefaultValue: "'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
        }
    },
    VProgressCircular: {
        qValue: {
            type: "number | string"
        },
        button: {
            type: Boolean
        },
        class: {
            type: String
        },
        indeterminate: {
            type: Boolean
        },
        rotate: {
            type: "number | string"
        },
        size: {
            type: "number | string"
        }
    },
    VProgressLinear: {
        qValue: {
            type: "number | string",
            editorDefaultValue: "15"
        },
        absolute: {
            type: Boolean
        },
        backgroundOpacity: {
            type: "string | number"
        },
        backgroundColor: {
            type: String,
            editorDefaultValue: "'purple'"
        },
        bottom: {
            type: Boolean
        },
        bufferValue: {
            type: "string | number"
        },
        class: {
            type: String
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        fixed: {
            type: Boolean
        },
        indeterminate: {
            type: Boolean
        },
        rounded: {
            type: Boolean
        },
        striped: {
            type: Boolean
        },
        top: {
            type: Boolean
        }
    },
    VRadio: {
        class: {
            type: String
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        label: {
            editorDefaultValue: "'Test radio label'"
        },
        offIcon: {
            type: String
        },
        onIcon: {
            type: String
        },
        ripple: {
            type: "boolean | object"
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        }
    },
    VRadioGroup: {
        qValue: {
            type: Number
        },
        appendIcon: {
            type: String
        },
        class: {
            type: String
        },
        column: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        hint: {
            type: String
        },
        label: {
            type: String
        },
        mandatory: {
            type: Boolean
        },
        max: {
            type: "number | string"
        },
        prependInnerIcon: {
            type: String
        },
        row: {
            type: Boolean
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        validateOnBlur: {
            type: Boolean,
            // default: false
        },
        valueComparator: {
            type: Function,
        }
    },
    VRangeSlider: {
        qValue: {
            type: "any",
            editorDefaultValue: "[30,60]"
        },
        class: {
            type: String
        },
        appendIcon: {
            type: String
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        max: {
            type: "number | string",
            editorDefaultValue: "100"
        },
        min: {
            type: "number | string",
            editorDefaultValue: "0"
        },
        prependInnerIcon: {
            type: String
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        step: {
            type: "number | string"
        },
        validateOnBlur: {
            type: Boolean
        },
        thumbSize: {
            type: "number | string"
        },
        tickLabels: {
            type: "Array<any>"
        },
        ticks: {
            type: "boolean | string"
        },
        vertical: {
            type: Boolean
        }
    },
    VRating: {
        qValue: {
            type: Number
        },
        class: {
            type: String
        },
        clearable: {
            type: Boolean
        },
        closeDelay: {
            type: "number | string"
        },
        dense: {
            type: Boolean
        },
        emptyIcon: {
            type: String
        },
        fullIcon: {
            type: String
        },
        halfIcon: {
            type: String
        },
        halfIncrements: {
            type: Boolean
        },
        hover: {
            type: Boolean
        },
        large: {
            type: Boolean
        },
        openDelay: {
            type: Boolean
        },
        openDereadonlylay: {
            type: Boolean
        },
        size: {
            type: "number | string"
        },
        small: {
            type: Boolean
        },
        ripple: {
            type: "boolean | object"
        },
        xSmall: {
            type: Boolean
        },
        xLarge: {
            type: Boolean
        }
    },
    VSelect: {
        qValue: {
            type: "any"
        },
        appendIcon: {
            type: String
        },
        attach: {
            type: Boolean,
            runTimeDefaultValue: true,
            runTimeOverrideValue: true
        },
        class: {
            type: String
        },
        dense: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        eager: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        error: {
            type: Boolean
        },
        errorMessages: {
            type: String
        },
        hint: {
            type: String
        },
        internalValue: {
            type: Number
        },
        items: {
            editorDefaultValue: "[{text = 'test1', value = 1}, { text = 'test2', value = 2}]"
        },
        itemText: {
            type: String
        },
        itemValue: {
            type: String
        },
        label: {
            editorDefaultValue: "'My Select'"
        },
        loading: {
            type: Boolean
        },
        multiple: {
            type: Boolean
        },
        outlined: {
            type: Boolean
        },
        placeholder: {
            type: String
        },
        prependInnerIcon: {
            type: String
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: String
        },
        regular: {
            type: Boolean
        },
        rules: {
            type: "Array<any>"
        }
    },
    VSheet: {
        class: {
            type: String
        },
        elevation: {
            type: "number | string"
        },
        height: {
            type: String
        },
        tag: {
            type: String
        },
        tile: {
            type: String
        }
    },
    VSlideGroup: {
        qValue: {
            type: "any"
        },
        activeClass: {
            type: String
        },
        centerActive: {
            type: Boolean
        },
        dark: {
            type: Boolean
        },
        mandatory: {
            type: Boolean
        },
        multiple: {
            type: Boolean
        },
        prevIcon: {
            type: String
        },
        showArrows: {
            type: Boolean
        }
    },
    VSlideItem: {
        qValue: {
            type: "any"
        },
        activeClass: {
            type: String
        },
        disabled: {
            type: Boolean
        }
    },
    VSlider: {
        qValue: {
            type: "any"
        },
        appendIcon: {
            type: String
        },
        class: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        hint: {
            type: String
        },
        label: {
            type: String
        },
        loading: {
            type: Boolean
        },
        max: {
            type: "number | string",
            editorDefaultValue: "100"
        },
        min: {
            type: "number | string",
            editorDefaultValue: "0"
        },
        prependInnerIcon: {
            type: String
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        step: {
            type: "number | string"
        },
        validateOnBlur: {
            type: Boolean
        },
        thumbSize: {
            type: "number | string"
        },
        tickLabels: {
            type: "Array<any>"
        },
        ticks: {
            type: "boolean | string"
        },
        vertical: {
            type: Boolean
        }
    },
    VSnackbar: {
        qValue: {
            type: "any"
        },
        bottom: {
            type: Boolean
        },
        center: {
            type: Boolean
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "warning"]
        },
        left: {
            type: Boolean
        },
        top: {
            type: Boolean
        },
        right: {
            type: Boolean
        }
    },
    VSpeedDial: {
        qValue: {
            type: "any"
        },
        absolute: {
            type: Boolean
        },
        bottom: {
            type: Boolean
        },
        class: {
            type: String
        },
        direction: {
            type: String
        },
        fixed: {
            type: Boolean
        },
        left: {
            type: Boolean
        },
        mode: {
            type: String
        },
        openOnHover: {
            type: Boolean
        },
        origin: {
            type: String
        },
        right: {
            type: Boolean
        },
        top: {
            type: Boolean
        },
        transition: {
            type: String
        }
    },
    VStepper: {
        qValue: {
            type: "any"
        },
        altLabels: {
            type: Boolean
        },
        class: {
            type: String
        },
        nonLinear: {
            type: Boolean
        },
        vertical: {
            type: String,
            editorDefaultValue: "true"
        }
    },
    VStepperContent: {
        step: {
            type: "number | string"
        }
    },
    VStepperHeader: {

    },
    VStepperItems: {

    },
    VStepperStep: {
        complete: {
            type: Boolean
        },
        completeIcon: {
            type: String
        },
        color: {
            type: String
        },
        editIcon: {
            type: String
        },
        editable: {
            type: Boolean
        },
        rules: {
            type: "Array<any>"
        },
        step: {
            type: "number | string"
        },
        text: {
            type: String
        }
    },
    VSwitch: {
        qValue: {
            type: "any"
        },
        appendIcon: {
            type: String
        },
        class: {
            type: String
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        hint: {
            type: String
        },
        label: {
            type: String,
            editorDefaultValue: "'Test Switch'"
        },
        loading: {
            type: "boolean | string"
        },
        prependInnerIcon: {
            type: String
        },
        ripple: {
            type: "boolean | object"
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        validateOnBlur: {
            type: Boolean,
            // default: false
        },
        valueComparator: {
            type: Function,
        }
    },
    VTab: {
        appendIcon: {
            type: String
        },
        class: {
            type: String
        },
        link: {
            type: Boolean
        },
        prependInnerIcon: {
            type: String
        },
        ripple: {
            type: "boolean | object"
        },
        replace: {
            type: Boolean
        },
        tag: {
            type: String
        },
        target: {
            type: String
        },
        to: {
            type: "string | object"
        }
    },
    VTabItem: {
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        disabled: {
            type: Boolean
        }
    },
    VTabs: {
        qValue: {
            type: "any"
        },
        alignWithTitle: {
            type: Boolean
        },
        class: {
            type: String
        },
        centered: {
            type: Boolean
        },
        centerActive: {
            type: Boolean
        },
        fixedTabs: {
            type: Boolean
        },
        grow: {
            type: Boolean
        },
        iconsAndText: {
            type: Boolean
        },
        mobileBreakPoint: {
            type: "number | string"
        },
        nextIcon: {
            type: String
        },
        prevIcon: {
            type: String
        },
        showArrows: {
            type: Boolean
        },
        vertical: {
            type: Boolean

        }
    },
    VTabsItems: {
        qValue: {
            type: "any"
        },
        class: {
            type: String
        },
        vertical: {
            type: Boolean
        },
        continuous: {
            type: Boolean
        },
        max: {
            type: "number | string"
        },
        multiple: {
            type: Boolean
        },
        nextIcon: {
            type: String
        },
        prevIcon: {
            type: String
        },
        showArrows: {
            type: Boolean
        },
        showArrowsOnHover: {
            type: Boolean
        },
        touch: {
            type: Object
        },
        touchless: {
            type: Boolean
        }
    },
    VTabsSlider: {
        class: {
            type: String
        }
    },
    VTextField: {
        qValue: {
            type: "any"
        },
        appendIcon: {
            type: String
        },
        appendOuterIcon: {
            type: String
        },
        autofocus: {
            type: Boolean
        },
        class: {
            type: String,
                runTimeOverrideValue: {
                    type: "Append",
                    value: "pt-0"
                }
        },
        clearIcon: {
            type: String
        },
        clearable: {
            type: Boolean
        },
        counter: {
            type: "boolean | string | number"
        },
        counterValue: {
            type: Function
        },
        dense: {
            type: Boolean,
            runTimeOverrideValue: true
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        format: {
            type: String
        },
        formatValues: {
            type: "Array<any>"
        },
        hint: {
            type: String
        },
        label: {
            type: String,
            editorDefaultValue: "'Text field label'"
        },
        loading: {
            type: "boolean | string"
        },
        maxlength: {
            type: "number | string"
        },
        outlined: {
            type: Boolean,
            editorDefaultValue: "true",
            runTimeOverrideValue: true
        },
        placeholder: {
            type: String
        },
        prefix: {
            type: String
        },
        prependIcon: {
            type: String
        },
        prependInnerIcon: {
            type: String
        },
        regular: {
            type: Boolean
        },
        readonly: {
            type: Boolean
        },
        rules: {
            type: "Array<any>"
        },
        solo: {
            type: Boolean
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        suffix: {
            type: String
        },
        type: {
            type: String
        },
        validateOnBlur: {
            type: Boolean
        }
    },
    VTextarea: {
        qValue: {
            type: "any"
        },
        appendIcon: {
            type: String
        },
        autoGrow: {
            type: Boolean
        },
        autofocus: {
            type: Boolean
        },
        class: {
            type: String,
                runTimeOverrideValue: {
                    type: "Append",
                    value: "pt-0"
                }
        },
        clearIcon: {
            type: String
        },
        clearable: {
            type: Boolean
        },
        counter: {
            type: "boolean | string | number"
        },
        counterValue: {
            type: Function
        },
        disabled: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        hint: {
            type: String
        },
        label: {
            type: String
        },
        loading: {
            type: "boolean | string"
        },
        noResize: {
            type: Boolean
        },
        outlined: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        placeholder: {
            type: String
        },
        prefix: {
            type: String
        },
        prependInnerIcon: {
            type: String
        },
        regular: {
            type: Boolean
        },
        rows: {
            type: "number | string"
        },
        rules: {
            type: "Array<any>"
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        suffix: {
            type: String
        },
        validateOnBlur: {
            type: Boolean
        }
    },
    VTimePicker: {
        qValue: {
            type: "any"
        },
        alignTop: {
            type: Boolean
        },
        dark: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        format: {
            type: String
        },
        max: {
            type: String
        },
        min: {
            type: String
        },
        noTitle: {
            type: Boolean
        }
    },
    VTimeline: {
        alignTop: {
            type: Boolean
        },
        dense: {
            type: Boolean
        }
    },
    VTimelineItem: {
        color: {
            type: String,
            options: ["'default'", "'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        icon: {
            type: String,
            options: ["'mdi-information'", "'mdi-check-circle'", "'mdi-alert-circle'", "'mdi-close-circle'"]
        },
        iconColor: {
            type: String,
            options: ["'default'", "'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        fillDot: {
            type: Boolean
        },
        large: {
            type: Boolean
        },
        left: {
            type: Boolean
        },
        right: {
            type: Boolean
        },
        small: {
            type: Boolean
        }
    },
    VToolbar: {
        absolute: {
            type: Boolean
        },
        bottom: {
            type: Boolean
        },
        class: {
            type: String
        },
        collapse: {
            type: Boolean
        },
        extended: {
            type: Boolean
        },
        floating: {
            type: Boolean
        },
        prominent: {
            type: Boolean
        },
        short: {
            type: Boolean
        },
        src: {
            type: "object | string"
        },
        tag: {
            type: String
        },
        tile: {
            type: Boolean
        }
    },
    VTreeview: {
        qValue: {
            type: "Array<any>"
        },
        items: {
            type: "Array<any>",
            editorDefaultValue: "[{name = 'test1', id = 1, children=[{name='test1 Child', id = 2}, {name='test2 Child', id = 3}]},{ name = 'test3', id = 4, children=[{name='test4 Child', id=5}]}]"
        },
        color: {
            type: String
        },
        activatable: {
            type: Boolean
        },
        hoverable: {
            type: Boolean
        },
        openAll: {
            type: Boolean
        },
        selectable: {
            type: Boolean
        },
        selectedColor: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        active: {
            type: "Array<any>"
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        dense: {
            type: Boolean
        },
        expandIcon: {
            type: String
        },
        itemChildren: {
            type: String
        },
        itemKey: {
            type: String
        },
        itemText: {
            type: String
        },
        multipleActive: {
            type: Boolean
        },
        offIcon: {
            type: String
        },
        onIcon: {
            type: String
        },
        open: {
            type: "Array<any>"
        },
        openOnClick: {
            type: Boolean
        },
        search: {
            type: String
        },
        shaped: {
            type: Boolean
        },
        transition: {
            type: "string | boolean"
        }
    },
    QLabel: {
        class: {
            type: String,
                options: ["'v-card__title'", "'v-list-item__title'"]
        },
        text: {
            type: String,
            editorDefaultValue: "'Text'",
            note: "Use to set label text of field"
        },
        tagType: {
            tpye: String,
            editorDefaultValue: "'span'",
            options: ["'span'", "'paragraph'"]
        },
        maxWidth: {
            type: String
        }
    },
    QLegend: {
        QJsonPath: {
            type: String,
            editorDefaultValue: "'qjson://QLegend'",
            runTimeOverrideValue: "qjson://QLegend"
        }
    },
    QCaptcha: {
        QJsonPath: {
            type: String,
            editorDefaultValue: "'qjson://QCaptcha'",
            runTimeOverrideValue: "qjson://QCaptcha"
        }
    },
    QDynamicFields: {
        QJsonPath: {
            type: String,
            editorDefaultValue: "'qjson://QDynamicFields'",
            runTimeOverrideValue: "qjson://QDynamicFields"
        }
    },
    QDocumentViewer: {
        customCompClass: {
            default: "pdf",
            type: String
        },
        src: {
            default: "",
            type: String
        },
        height: {
            default: "50px",
            type: String
        }
    },
    DxPaging: {
        pageSize: {
            type: Number,
            editorDefaultValue: '3'
        },
        pageIndex: {
            type: String
        },
        enabled: {
            type: Boolean
        }
    }
};

if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = componentOptions;
} else {
    window["plateauUIComponentOptions"] = componentOptions;
}
//#region JS Section