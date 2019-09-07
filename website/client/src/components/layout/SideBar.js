import React,{Fragment} from 'react'
import { stack as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom'
const SideBar = () => {
  return (
   <Fragment>
     <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md">
            {/* Sidebar mobile toggler */}
            <div className="sidebar-mobile-toggler text-center">
              <a href="#" className="sidebar-mobile-main-toggle">
                <i className="icon-arrow-left8" />
              </a>
              Navigation
              <a href="#" className="sidebar-mobile-expand">
                <i className="icon-screen-full" />
                <i className="icon-screen-normal" />
              </a>
            </div>
            {/* /sidebar mobile toggler */}
            {/* Sidebar content */}
            <div className="sidebar-content">
              {/* User menu */}
              <div className="sidebar-user">
                <div className="card-body">
                  <div className="media">
                    <div className="mr-3">
                      <a href="#"><img src=" global_assets/images/demo/users/face11.jpg" width={38} height={38} className="rounded-circle" alt="" /></a>
                    </div>
                    <div className="media-body">
                      <div className="media-title font-weight-semibold">Victoria Baker</div>
                      <div className="font-size-xs opacity-50">
                        <i className="icon-pin font-size-sm" /> &nbsp;Santa Ana, CA
                      </div>
                    </div>
                    <div className="ml-3 align-self-center">
                      <a href="#" className="text-white"><i className="icon-cog3" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* /user menu */}
              {/* Main navigation */}
              <div className="card card-sidebar-mobile">
                <ul className="nav nav-sidebar" data-nav-type="accordion">
                  {/* Main */}
                  <li className="nav-item-header"><div className="text-uppercase font-size-xs line-height-xs">Main</div> <i className="icon-menu" title="Main" /></li>
                  <li className="nav-item">
                    <Link to="/profile" className="nav-link active">
                      <i className="icon-home4" />
                      <span>
                        My Profile
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-copy" /> <span>My Reminders</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Layouts">
                      <li className="nav-item"><a href="index.html" className="nav-link active">Set Reminders</a></li>
                      <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_2/LTR/default/full/index.html" className="nav-link">Show My Reminders</a></li>
                      {/* <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_6/LTR/default/full/index.html" className="nav-link disabled">Layout 6 <span className="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li> */}
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-color-sampler" /> <span>My Records</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Themes">
                      <li className="nav-item"><a href="index.html" className="nav-link active">Create Personal Record</a></li>
                      <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/material/full/index.html" className="nav-link">Show my Personal record</a></li>
                      <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/material/full/index.html" className="nav-link">Doctor Reports</a></li>

                      {/* <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/dark/full/index.html" className="nav-link disabled">Dark <span className="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li> */}
                      {/* <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/clean/full/index.html" className="nav-link disabled">Clean <span className="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li> */}
                    </ul>
                  </li>
                  {/* <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-stack" /> <span>Starter kit</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                      <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/seed/layout_nav_horizontal.html" className="nav-link">Horizontal navigation</a></li>
                      <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/seed/sidebar_none.html" className="nav-link">No sidebar</a></li>
                      <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/seed/sidebar_main.html" className="nav-link">1 sidebar</a></li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">2 sidebars</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/seed/sidebar_secondary.html" className="nav-link">Secondary sidebar</a></li>
                          <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/seed/sidebar_right.html" className="nav-link">Right sidebar</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">3 sidebars</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/seed/sidebar_right_hidden.html" className="nav-link">Right sidebar hidden</a></li>
                          <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/seed/sidebar_right_visible.html" className="nav-link">Right sidebar visible</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Content sidebars</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/seed/sidebar_content_left.html" className="nav-link">Left sidebar</a></li>
                          <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/seed/sidebar_content_right.html" className="nav-link">Right sidebar</a></li>
                        </ul>
                      </li>
                      <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/seed/layout_boxed.html" className="nav-link">Boxed layout</a></li>
                      <li className="nav-item-divider" />
                      <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/seed/navbar_fixed_main.html" className="nav-link">Fixed main navbar</a></li>
                      <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/seed/navbar_fixed_secondary.html" className="nav-link">Fixed secondary navbar</a></li>
                      <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/seed/navbar_fixed_both.html" className="nav-link">Both navbars fixed</a></li>
                      <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/seed/layout_fixed.html" className="nav-link">Fixed layout</a></li>
                    </ul>
                  </li> */}
                  {/* <li className="nav-item">
                    <a href="changelog.html" className="nav-link">
                      <i className="icon-list-unordered" />
                      <span>Changelog</span>
                      <span className="badge bg-blue-400 align-self-center ml-auto">2.2</span>
                    </a>
                  </li> */}
                                    <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/RTL/default/full/index.html" className="nav-link"><i className="icon-width" /> <span>Symptom Tracker</span></a></li>
                  <li className="nav-item"><a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/RTL/default/full/index.html" className="nav-link"><i className="icon-width" /> <span>Social Media Analysis</span></a></li>
                  {/* /main */}
                  {/* Forms */}
                  {/* <li className="nav-item-header"><div className="text-uppercase font-size-xs line-height-xs">Forms</div> <i className="icon-menu" title="Forms" /></li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-pencil3" /> <span>Form components</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Form components">
                      <li className="nav-item"><a href="form_inputs.html" className="nav-link">Basic inputs</a></li>
                      <li className="nav-item"><a href="form_checkboxes_radios.html" className="nav-link">Checkboxes &amp; radios</a></li>
                      <li className="nav-item"><a href="form_select2.html" className="nav-link">Select2 selects</a></li>
                      <li className="nav-item"><a href="form_multiselect.html" className="nav-link">Bootstrap multiselect</a></li>
                      <li className="nav-item"><a href="form_input_groups.html" className="nav-link">Input groups</a></li>
                      <li className="nav-item"><a href="form_controls_extended.html" className="nav-link">Extended controls</a></li>
                      <li className="nav-item"><a href="form_floating_labels.html" className="nav-link">Floating labels</a></li>
                      <li className="nav-item"><a href="form_tag_inputs.html" className="nav-link">Tag inputs</a></li>
                      <li className="nav-item"><a href="form_dual_listboxes.html" className="nav-link">Dual Listboxes</a></li>
                      <li className="nav-item"><a href="form_validation.html" className="nav-link">Validation</a></li>
                      <li className="nav-item"><a href="form_wizard.html" className="nav-link">Form wizard</a></li>
                      <li className="nav-item"><a href="form_actions.html" className="nav-link">Form actions</a></li>
                      <li className="nav-item"><a href="form_inputs_grid.html" className="nav-link">Inputs grid</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-file-css" /> <span>JSON forms</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="JSON forms">
                      <li className="nav-item"><a href="alpaca_basic.html" className="nav-link">Basic inputs</a></li>
                      <li className="nav-item"><a href="alpaca_advanced.html" className="nav-link">Advanced inputs</a></li>
                      <li className="nav-item"><a href="alpaca_controls.html" className="nav-link">Controls</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-spell-check" /> <span>Text editors</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Text editors">
                      <li className="nav-item"><a href="editor_summernote.html" className="nav-link">Summernote editor</a></li>
                      <li className="nav-item"><a href="editor_ckeditor.html" className="nav-link">CKEditor</a></li>
                      <li className="nav-item"><a href="editor_trumbowyg.html" className="nav-link">Trumbowyg editor</a></li>
                      <li className="nav-item"><a href="editor_code.html" className="nav-link">Code editor</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-select2" /> <span>Pickers</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Pickers">
                      <li className="nav-item"><a href="picker_date.html" className="nav-link">Date &amp; time pickers</a></li>
                      <li className="nav-item"><a href="picker_color.html" className="nav-link">Color pickers</a></li>
                      <li className="nav-item"><a href="picker_location.html" className="nav-link">Location pickers</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-insert-template" /> <span>Form layouts</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Form layouts">
                      <li className="nav-item"><a href="form_layout_vertical.html" className="nav-link">Vertical form</a></li>
                      <li className="nav-item"><a href="form_layout_vertical_styled.html" className="nav-link disabled">Custom styles <span className="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li>
                      <li className="nav-item-divider" />
                      <li className="nav-item"><a href="form_layout_horizontal.html" className="nav-link">Horizontal form</a></li>
                      <li className="nav-item"><a href="form_layout_horizontal_styled.html" className="nav-link disabled">Custom styles <span className="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li>
                    </ul>
                  </li> */}
                  {/* /forms */}
                  {/* Components */}
                  {/* <li className="nav-item-header"><div className="text-uppercase font-size-xs line-height-xs">Components</div> <i className="icon-menu" title="Components" /></li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-grid" /> <span>Basic components</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Basic components">
                      <li className="nav-item"><a href="components_modals.html" className="nav-link">Modals</a></li>
                      <li className="nav-item"><a href="components_dropdowns.html" className="nav-link">Dropdown menus</a></li>
                      <li className="nav-item"><a href="components_tabs.html" className="nav-link">Tabs component</a></li>
                      <li className="nav-item"><a href="components_pills.html" className="nav-link">Pills component</a></li>
                      <li className="nav-item"><a href="components_collapsible.html" className="nav-link">Collapsible</a></li>
                      <li className="nav-item"><a href="components_navs.html" className="nav-link">Navs</a></li>
                      <li className="nav-item"><a href="components_buttons.html" className="nav-link">Buttons</a></li>
                      <li className="nav-item"><a href="components_popups.html" className="nav-link">Tooltips and popovers</a></li>
                      <li className="nav-item"><a href="components_alerts.html" className="nav-link">Alerts</a></li>
                      <li className="nav-item"><a href="components_pagination.html" className="nav-link">Pagination</a></li>
                      <li className="nav-item"><a href="components_badges.html" className="nav-link">Badges</a></li>
                      <li className="nav-item"><a href="components_progress.html" className="nav-link">Progress</a></li>
                      <li className="nav-item"><a href="components_breadcrumbs.html" className="nav-link">Breadcrumbs</a></li>
                      <li className="nav-item"><a href="components_media.html" className="nav-link">Media objects</a></li>
                      <li className="nav-item"><a href="components_scrollspy.html" className="nav-link">Scrollspy</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-puzzle2" /> <span>Content styling</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Content styling">
                      <li className="nav-item"><a href="content_page_header.html" className="nav-link">Page header</a></li>
                      <li className="nav-item"><a href="content_page_footer.html" className="nav-link disabled">Page footer <span className="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li>
                      <li className="nav-item-divider" />
                      <li className="nav-item"><a href="content_cards.html" className="nav-link">Cards</a></li>
                      <li className="nav-item"><a href="content_cards_content.html" className="nav-link">Card content</a></li>
                      <li className="nav-item"><a href="content_cards_layouts.html" className="nav-link">Card layouts</a></li>
                      <li className="nav-item"><a href="content_cards_header.html" className="nav-link">Card header elements</a></li>
                      <li className="nav-item"><a href="content_cards_footer.html" className="nav-link">Card footer elements</a></li>
                      <li className="nav-item"><a href="content_cards_draggable.html" className="nav-link">Draggable cards</a></li>
                      <li className="nav-item-divider" />
                      <li className="nav-item"><a href="content_text_styling.html" className="nav-link">Text styling</a></li>
                      <li className="nav-item"><a href="content_typography.html" className="nav-link">Typography</a></li>
                      <li className="nav-item"><a href="content_helpers.html" className="nav-link">Helper classes</a></li>
                      <li className="nav-item"><a href="content_helpers_flex.html" className="nav-link">Flex utilities</a></li>
                      <li className="nav-item"><a href="content_syntax_highlighter.html" className="nav-link">Syntax highlighter</a></li>
                      <li className="nav-item"><a href="content_grid.html" className="nav-link">Grid system</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-gift" /> <span>Extra components</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Extra components">
                      <li className="nav-item"><a href="extra_pnotify.html" className="nav-link">PNotify notifications</a></li>
                      <li className="nav-item"><a href="extra_jgrowl_noty.html" className="nav-link">jGrowl and Noty notifications</a></li>
                      <li className="nav-item"><a href="extra_sweetalert.html" className="nav-link">SweetAlert notifications</a></li>
                      <li className="nav-item-divider" />
                      <li className="nav-item"><a href="extra_sliders_noui.html" className="nav-link">NoUI sliders</a></li>
                      <li className="nav-item"><a href="extra_sliders_ion.html" className="nav-link">Ion range sliders</a></li>
                      <li className="nav-item"><a href="extra_trees.html" className="nav-link">Dynamic tree views</a></li>
                      <li className="nav-item"><a href="extra_context_menu.html" className="nav-link">Context menu</a></li>
                      <li className="nav-item"><a href="extra_fab.html" className="nav-link">Floating action buttons</a></li>
                      <li className="nav-item"><a href="extra_session_timeout.html" className="nav-link">Session timeout</a></li>
                      <li className="nav-item"><a href="extra_idle_timeout.html" className="nav-link">Idle timeout</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-droplet2" /> <span>Color system</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Color system">
                      <li className="nav-item"><a href="colors_primary.html" className="nav-link">Primary palette</a></li>
                      <li className="nav-item"><a href="colors_danger.html" className="nav-link">Danger palette</a></li>
                      <li className="nav-item"><a href="colors_success.html" className="nav-link">Success palette</a></li>
                      <li className="nav-item"><a href="colors_warning.html" className="nav-link">Warning palette</a></li>
                      <li className="nav-item"><a href="colors_info.html" className="nav-link">Info palette</a></li>
                      <li className="nav-item-divider" />
                      <li className="nav-item"><a href="colors_pink.html" className="nav-link">Pink palette</a></li>
                      <li className="nav-item"><a href="colors_violet.html" className="nav-link">Violet palette</a></li>
                      <li className="nav-item"><a href="colors_purple.html" className="nav-link">Purple palette</a></li>
                      <li className="nav-item"><a href="colors_indigo.html" className="nav-link">Indigo palette</a></li>
                      <li className="nav-item"><a href="colors_blue.html" className="nav-link">Blue palette</a></li>
                      <li className="nav-item"><a href="colors_teal.html" className="nav-link">Teal palette</a></li>
                      <li className="nav-item"><a href="colors_green.html" className="nav-link">Green palette</a></li>
                      <li className="nav-item"><a href="colors_orange.html" className="nav-link">Orange palette</a></li>
                      <li className="nav-item"><a href="colors_brown.html" className="nav-link">Brown palette</a></li>
                      <li className="nav-item"><a href="colors_grey.html" className="nav-link">Grey palette</a></li>
                      <li className="nav-item"><a href="colors_slate.html" className="nav-link">Slate palette</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-spinner2 spinner" /> <span>Animations</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Animations">
                      <li className="nav-item"><a href="animations_css3.html" className="nav-link">CSS3 animations</a></li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Velocity animations</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="animations_velocity_basic.html" className="nav-link">Basic usage</a></li>
                          <li className="nav-item"><a href="animations_velocity_ui.html" className="nav-link">UI pack effects</a></li>
                          <li className="nav-item"><a href="animations_velocity_examples.html" className="nav-link">Advanced examples</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-thumbs-up2" /> <span>Icons</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Icons">
                      <li className="nav-item"><a href="icons_icomoon.html" className="nav-link">Icomoon</a></li>
                      <li className="nav-item"><a href="icons_material.html" className="nav-link">Material</a></li>
                      <li className="nav-item"><a href="icons_fontawesome.html" className="nav-link">Font awesome</a></li>
                    </ul>
                  </li> */}
                  {/* /components */}
                  {/* Layout */}
                  {/* <li className="nav-item-header"><div className="text-uppercase font-size-xs line-height-xs">Layout</div> <i className="icon-menu" title="Layout options" /></li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-stack2" /> <span>Page layouts</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Page layouts">
                      <li className="nav-item"><a href="layout_fixed_navbar.html" className="nav-link">Fixed navbar</a></li>
                      <li className="nav-item"><a href="layout_fixed_sidebar_custom.html" className="nav-link">Fixed sidebar - custom scroll</a></li>
                      <li className="nav-item"><a href="layout_fixed_sidebar_native.html" className="nav-link">Fixed sidebar - native scroll</a></li>
                      <li className="nav-item"><a href="layout_fixed_hideable_navbar.html" className="nav-link">Hideable navbar</a></li>
                      <li className="nav-item"><a href="layout_fixed_footer.html" className="nav-link">Fixed footer</a></li>
                      <li className="nav-item-divider" />
                      <li className="nav-item"><a href="layout_boxed_default.html" className="nav-link">Boxed with default sidebar</a></li>
                      <li className="nav-item"><a href="layout_boxed_mini.html" className="nav-link">Boxed with mini sidebar</a></li>
                      <li className="nav-item"><a href="layout_boxed_full.html" className="nav-link">Boxed full width</a></li>
                      <li className="nav-item"><a href="layout_boxed_content.html" className="nav-link">Boxed content</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-indent-decrease2" /> <span>Sidebars</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Sidebars">
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Main sidebar</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="sidebar_default_collapse.html" className="nav-link">Default collapsible</a></li>
                          <li className="nav-item"><a href="sidebar_default_hide.html" className="nav-link">Default hideable</a></li>
                          <li className="nav-item"><a href="sidebar_default_hidden.html" className="nav-link">Default hidden</a></li>
                          <li className="nav-item"><a href="sidebar_mini_collapse.html" className="nav-link">Mini collapsible</a></li>
                          <li className="nav-item"><a href="sidebar_mini_hide.html" className="nav-link">Mini hideable</a></li>
                          <li className="nav-item"><a href="sidebar_mini_hidden.html" className="nav-link">Mini hidden</a></li>
                          <li className="nav-item-divider" />
                          <li className="nav-item"><a href="sidebar_default_color_light.html" className="nav-link">Light color</a></li>
                          <li className="nav-item"><a href="sidebar_default_color_custom.html" className="nav-link">Custom color</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Secondary sidebar</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="sidebar_secondary_after.html" className="nav-link">After default</a></li>
                          <li className="nav-item"><a href="sidebar_secondary_before.html" className="nav-link">Before default</a></li>
                          <li className="nav-item"><a href="sidebar_secondary_hidden.html" className="nav-link">Hidden by default</a></li>
                          <li className="nav-item-divider" />
                          <li className="nav-item"><a href="sidebar_secondary_color_dark.html" className="nav-link">Dark color</a></li>
                          <li className="nav-item"><a href="sidebar_secondary_color_custom.html" className="nav-link">Custom color</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Right sidebar</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="sidebar_right_default_collapse.html" className="nav-link">Show - collapse main</a></li>
                          <li className="nav-item"><a href="sidebar_right_default_hide.html" className="nav-link">Show - hide main</a></li>
                          <li className="nav-item"><a href="sidebar_right_default_toggle.html" className="nav-link">Show - fix default width</a></li>
                          <li className="nav-item"><a href="sidebar_right_mini_toggle.html" className="nav-link">Show - fix mini width</a></li>
                          <li className="nav-item"><a href="sidebar_right_secondary_hide.html" className="nav-link">Show - hide secondary</a></li>
                          <li className="nav-item"><a href="sidebar_right_visible.html" className="nav-link">Visible by default</a></li>
                          <li className="nav-item-divider" />
                          <li className="nav-item"><a href="sidebar_right_color_dark.html" className="nav-link">Dark color</a></li>
                          <li className="nav-item"><a href="sidebar_right_color_custom.html" className="nav-link">Custom color</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Content sidebar</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="sidebar_content_left.html" className="nav-link">Left position</a></li>
                          <li className="nav-item"><a href="sidebar_content_left_stretch.html" className="nav-link">Left stretched</a></li>
                          <li className="nav-item"><a href="sidebar_content_left_hidden.html" className="nav-link">Left hidden</a></li>
                          <li className="nav-item"><a href="sidebar_content_right.html" className="nav-link">Right position</a></li>
                          <li className="nav-item"><a href="sidebar_content_right_stretch.html" className="nav-link">Right stretched</a></li>
                          <li className="nav-item"><a href="sidebar_content_right_hidden.html" className="nav-link">Right hidden</a></li>
                          <li className="nav-item"><a href="sidebar_content_sections.html" className="nav-link">Sectioned sidebar</a></li>
                          <li className="nav-item-divider" />
                          <li className="nav-item"><a href="sidebar_content_color_dark.html" className="nav-link">Dark color</a></li>
                          <li className="nav-item"><a href="sidebar_content_color_custom.html" className="nav-link">Custom color</a></li>
                          <li className="nav-item"><a href="sidebar_content_color_sections_custom.html" className="nav-link">Custom sections color</a></li>
                        </ul>
                      </li>
                      <li className="nav-item-divider" />
                      <li className="nav-item"><a href="sidebar_components.html" className="nav-link">Sidebar components</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-menu3" /> <span>Navbars</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Navbars">
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Single navbar</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="navbar_single_top_static.html" className="nav-link">Single top static</a></li>
                          <li className="nav-item"><a href="navbar_single_top_fixed.html" className="nav-link">Single top fixed</a></li>
                          <li className="nav-item"><a href="navbar_single_bottom_static.html" className="nav-link">Single bottom static</a></li>
                          <li className="nav-item"><a href="navbar_single_bottom_fixed.html" className="nav-link">Single bottom fixed</a></li>
                          <li className="nav-item"><a href="navbar_single_header_before.html" className="nav-link">Before page header</a></li>
                          <li className="nav-item"><a href="navbar_single_header_after.html" className="nav-link">After page header</a></li>
                          <li className="nav-item"><a href="navbar_single_content_after.html" className="nav-link">After page content</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Multiple navbars</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="navbar_multiple_top_static.html" className="nav-link">Multiple top static</a></li>
                          <li className="nav-item"><a href="navbar_multiple_top_fixed.html" className="nav-link">Multiple top fixed</a></li>
                          <li className="nav-item"><a href="navbar_multiple_bottom_static.html" className="nav-link">Multiple bottom static</a></li>
                          <li className="nav-item"><a href="navbar_multiple_bottom_fixed.html" className="nav-link">Multiple bottom fixed</a></li>
                          <li className="nav-item"><a href="navbar_multiple_top_bottom.html" className="nav-link">Multiple - top and bottom</a></li>
                          <li className="nav-item"><a href="navbar_multiple_secondary_sticky.html" className="nav-link">Multiple - secondary sticky</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Content navbar</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="navbar_component_single.html" className="nav-link">Single navbar</a></li>
                          <li className="nav-item"><a href="navbar_component_multiple.html" className="nav-link">Multiple navbars</a></li>
                        </ul>
                      </li>
                      <li className="nav-item-divider" />
                      <li className="nav-item"><a href="navbar_colors.html" className="nav-link">Color options</a></li>
                      <li className="nav-item"><a href="navbar_sizes.html" className="nav-link">Sizing options</a></li>
                      <li className="nav-item"><a href="navbar_hideable.html" className="nav-link">Hide on scroll</a></li>
                      <li className="nav-item"><a href="navbar_components.html" className="nav-link">Navbar components</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-sort" /> <span>Vertical navigation</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Vertical navigation">
                      <li className="nav-item"><a href="navigation_vertical_collapsible.html" className="nav-link">Collapsible menu</a></li>
                      <li className="nav-item"><a href="navigation_vertical_accordion.html" className="nav-link">Accordion menu</a></li>
                      <li className="nav-item"><a href="navigation_vertical_bordered.html" className="nav-link">Bordered navigation</a></li>
                      <li className="nav-item"><a href="navigation_vertical_right_icons.html" className="nav-link">Right icons</a></li>
                      <li className="nav-item"><a href="navigation_vertical_badges.html" className="nav-link">Badges</a></li>
                      <li className="nav-item"><a href="navigation_vertical_disabled.html" className="nav-link">Disabled items</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-transmission" /> <span>Horizontal navigation</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Horizontal navigation">
                      <li className="nav-item"><a href="navigation_horizontal_click.html" className="nav-link">Submenu on click</a></li>
                      <li className="nav-item"><a href="navigation_horizontal_hover.html" className="nav-link">Submenu on hover</a></li>
                      <li className="nav-item"><a href="navigation_horizontal_elements.html" className="nav-link">With custom elements</a></li>
                      <li className="nav-item"><a href="navigation_horizontal_tabs.html" className="nav-link">Tabbed navigation</a></li>
                      <li className="nav-item"><a href="navigation_horizontal_disabled.html" className="nav-link">Disabled navigation links</a></li>
                      <li className="nav-item"><a href="navigation_horizontal_mega.html" className="nav-link">Horizontal mega menu</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-tree5" /> <span>Menu levels</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Menu levels">
                      <li className="nav-item"><a href="#" className="nav-link"><i className="icon-IE" /> Second level</a></li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link"><i className="icon-firefox" /> Second level with child</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="#" className="nav-link"><i className="icon-android" /> Third level</a></li>
                          <li className="nav-item nav-item-submenu">
                            <a href="#" className="nav-link"><i className="icon-apple2" /> Third level with child</a>
                            <ul className="nav nav-group-sub">
                              <li className="nav-item"><a href="#" className="nav-link"><i className="icon-html5" /> Fourth level</a></li>
                              <li className="nav-item"><a href="#" className="nav-link"><i className="icon-css3" /> Fourth level</a></li>
                            </ul>
                          </li>
                          <li className="nav-item"><a href="#" className="nav-link"><i className="icon-windows" /> Third level</a></li>
                        </ul>
                      </li>
                      <li className="nav-item"><a href="#" className="nav-link"><i className="icon-chrome" /> Second level</a></li>
                    </ul>
                  </li> */}
                  {/* /layout */}
                  {/* Data visualization */}
                  {/* <li className="nav-item-header"><div className="text-uppercase font-size-xs line-height-xs">Data visualization</div> <i className="icon-menu" title="Data visualization" /></li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-graph" /> <span>Echarts library</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="ECharts library">
                      <li className="nav-item"><a href="echarts_lines.html" className="nav-link">Line charts</a></li>
                      <li className="nav-item"><a href="echarts_areas.html" className="nav-link">Area charts</a></li>
                      <li className="nav-item"><a href="echarts_columns_waterfalls.html" className="nav-link">Columns and waterfalls</a></li>
                      <li className="nav-item"><a href="echarts_bars_tornados.html" className="nav-link">Bars and tornados</a></li>
                      <li className="nav-item"><a href="echarts_scatter.html" className="nav-link">Scatter charts</a></li>
                      <li className="nav-item"><a href="echarts_pies_donuts.html" className="nav-link">Pies and donuts</a></li>
                      <li className="nav-item"><a href="echarts_funnels_calendars.html" className="nav-link">Funnels and calendars</a></li>
                      <li className="nav-item"><a href="echarts_candlesticks_others.html" className="nav-link">Candlesticks and others</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-statistics" /> <span>D3 library</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="D3 library">
                      <li className="nav-item"><a href="d3_lines_basic.html" className="nav-link">Simple lines</a></li>
                      <li className="nav-item"><a href="d3_lines_advanced.html" className="nav-link">Advanced lines</a></li>
                      <li className="nav-item"><a href="d3_bars_basic.html" className="nav-link">Simple bars</a></li>
                      <li className="nav-item"><a href="d3_bars_advanced.html" className="nav-link">Advanced bars</a></li>
                      <li className="nav-item"><a href="d3_pies.html" className="nav-link">Pie charts</a></li>
                      <li className="nav-item"><a href="d3_circle_diagrams.html" className="nav-link">Circle diagrams</a></li>
                      <li className="nav-item"><a href="d3_tree.html" className="nav-link">Tree layout</a></li>
                      <li className="nav-item"><a href="d3_other.html" className="nav-link">Other charts</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-stats-dots" /> <span>Dimple library</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Dimple library">
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Line charts</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="dimple_lines_horizontal.html" className="nav-link">Horizontal orientation</a></li>
                          <li className="nav-item"><a href="dimple_lines_vertical.html" className="nav-link">Vertical orientation</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Bar charts</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="dimple_bars_horizontal.html" className="nav-link">Horizontal orientation</a></li>
                          <li className="nav-item"><a href="dimple_bars_vertical.html" className="nav-link">Vertical orientation</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Area charts</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="dimple_area_horizontal.html" className="nav-link">Horizontal orientation</a></li>
                          <li className="nav-item"><a href="dimple_area_vertical.html" className="nav-link">Vertical orientation</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Step charts</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="dimple_step_horizontal.html" className="nav-link">Horizontal orientation</a></li>
                          <li className="nav-item"><a href="dimple_step_vertical.html" className="nav-link">Vertical orientation</a></li>
                        </ul>
                      </li>
                      <li className="nav-item"><a href="dimple_pies.html" className="nav-link">Pie charts</a></li>
                      <li className="nav-item"><a href="dimple_rings.html" className="nav-link">Ring charts</a></li>
                      <li className="nav-item"><a href="dimple_scatter.html" className="nav-link">Scatter charts</a></li>
                      <li className="nav-item"><a href="dimple_bubble.html" className="nav-link">Bubble charts</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-stats-bars" /> <span>C3 library</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="C3 library">
                      <li className="nav-item"><a href="c3_lines_areas.html" className="nav-link">Lines and areas</a></li>
                      <li className="nav-item"><a href="c3_bars_pies.html" className="nav-link">Bars and pies</a></li>
                      <li className="nav-item"><a href="c3_advanced.html" className="nav-link">Advanced examples</a></li>
                      <li className="nav-item"><a href="c3_axis.html" className="nav-link">Chart axis</a></li>
                      <li className="nav-item"><a href="c3_grid.html" className="nav-link">Grid options</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-google" /> <span>Google charts</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Google charts">
                      <li className="nav-item"><a href="google_lines.html" className="nav-link">Line charts</a></li>
                      <li className="nav-item"><a href="google_bars.html" className="nav-link">Bar charts</a></li>
                      <li className="nav-item"><a href="google_pies.html" className="nav-link">Pie charts</a></li>
                      <li className="nav-item"><a href="google_scatter_bubble.html" className="nav-link">Bubble &amp; scatter charts</a></li>
                      <li className="nav-item"><a href="google_other.html" className="nav-link">Other charts</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-map5" /> <span>Maps integration</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Maps integration">
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Google maps</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="maps_google_basic.html" className="nav-link">Basics</a></li>
                          <li className="nav-item"><a href="maps_google_controls.html" className="nav-link">Controls</a></li>
                          <li className="nav-item"><a href="maps_google_markers.html" className="nav-link">Markers</a></li>
                          <li className="nav-item"><a href="maps_google_drawings.html" className="nav-link">Map drawings</a></li>
                          <li className="nav-item"><a href="maps_google_layers.html" className="nav-link ">Layers</a></li>
                        </ul>
                      </li>
                      <li className="nav-item"><a href="maps_vector.html" className="nav-link">Vector maps</a></li>
                      <li className="nav-item"><a href="maps_echarts.html" className="nav-link disabled">ECharts maps <span className="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li>
                    </ul>
                </li> */}
                  {/*data visualization */}
                  {/* Extensions */}
                  {/* <li className="nav-item-header"><div className="text-uppercase font-size-xs line-height-xs">Extensions</div> <i className="icon-menu" title="Extensions" /></li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-puzzle4" /> <span>Extensions</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Extensions">
                      <li className="nav-item"><a href="extension_image_cropper.html" className="nav-link">Image cropper</a></li>
                      <li className="nav-item"><a href="extension_blockui.html" className="nav-link">Block UI</a></li>
                      <li className="nav-item"><a href="extension_dnd.html" className="nav-link">Drag and drop</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-popout" /> <span>JQuery UI</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="jQuery UI">
                      <li className="nav-item"><a href="jqueryui_interactions.html" className="nav-link">Interactions</a></li>
                      <li className="nav-item"><a href="jqueryui_forms.html" className="nav-link">Forms</a></li>
                      <li className="nav-item"><a href="jqueryui_components.html" className="nav-link">Components</a></li>
                      <li className="nav-item"><a href="jqueryui_sliders.html" className="nav-link">Sliders</a></li>
                      <li className="nav-item"><a href="jqueryui_navigation.html" className="nav-link">Navigation</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-upload" /> <span>File uploaders</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="File uploaders">
                      <li className="nav-item"><a href="uploader_plupload.html" className="nav-link">Plupload</a></li>
                      <li className="nav-item"><a href="uploader_bootstrap.html" className="nav-link">Bootstrap file uploader</a></li>
                      <li className="nav-item"><a href="uploader_dropzone.html" className="nav-link">Dropzone</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-calendar3" /> <span>Event calendars</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Event calendars">
                      <li className="nav-item"><a href="fullcalendar_views.html" className="nav-link">Basic views</a></li>
                      <li className="nav-item"><a href="fullcalendar_styling.html" className="nav-link">Event styling</a></li>
                      <li className="nav-item"><a href="fullcalendar_formats.html" className="nav-link">Language and time</a></li>
                      <li className="nav-item"><a href="fullcalendar_advanced.html" className="nav-link">Advanced usage</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-sphere" /> <span>Internationalization</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Internationalization">
                      <li className="nav-item"><a href="internationalization_switch_direct.html" className="nav-link">Direct translation</a></li>
                      <li className="nav-item"><a href="internationalization_switch_query.html" className="nav-link">Querystring parameter</a></li>
                      <li className="nav-item"><a href="internationalization_fallback.html" className="nav-link">Language fallback</a></li>
                      <li className="nav-item"><a href="internationalization_callbacks.html" className="nav-link">Callbacks</a></li>
                    </ul>
                  </li> */}
                  {/* /extensions */}
                  {/* Tables */}
                  {/* <li className="nav-item-header"><div className="text-uppercase font-size-xs line-height-xs">Tables</div> <i className="icon-menu" title="Tables" /></li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-table2" /> <span>Basic tables</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Basic tables">
                      <li className="nav-item"><a href="table_basic.html" className="nav-link">Basic examples</a></li>
                      <li className="nav-item"><a href="table_sizing.html" className="nav-link">Table sizing</a></li>
                      <li className="nav-item"><a href="table_borders.html" className="nav-link">Table borders</a></li>
                      <li className="nav-item"><a href="table_styling.html" className="nav-link">Table styling</a></li>
                      <li className="nav-item"><a href="table_elements.html" className="nav-link">Table elements</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-grid7" /> <span>Data tables</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Data tables">
                      <li className="nav-item"><a href="datatable_basic.html" className="nav-link">Basic initialization</a></li>
                      <li className="nav-item"><a href="datatable_styling.html" className="nav-link">Basic styling</a></li>
                      <li className="nav-item"><a href="datatable_advanced.html" className="nav-link">Advanced examples</a></li>
                      <li className="nav-item"><a href="datatable_sorting.html" className="nav-link">Sorting options</a></li>
                      <li className="nav-item"><a href="datatable_api.html" className="nav-link">Using API</a></li>
                      <li className="nav-item"><a href="datatable_data_sources.html" className="nav-link">Data sources</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-alignment-unalign" /> <span>Data tables extensions</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Data tables extensions">
                      <li className="nav-item"><a href="datatable_extension_reorder.html" className="nav-link">Columns reorder</a></li>
                      <li className="nav-item"><a href="datatable_extension_row_reorder.html" className="nav-link">Row reorder</a></li>
                      <li className="nav-item"><a href="datatable_extension_fixed_columns.html" className="nav-link">Fixed columns</a></li>
                      <li className="nav-item"><a href="datatable_extension_fixed_header.html" className="nav-link">Fixed header</a></li>
                      <li className="nav-item"><a href="datatable_extension_autofill.html" className="nav-link">Auto fill</a></li>
                      <li className="nav-item"><a href="datatable_extension_key_table.html" className="nav-link">Key table</a></li>
                      <li className="nav-item"><a href="datatable_extension_scroller.html" className="nav-link">Scroller</a></li>
                      <li className="nav-item"><a href="datatable_extension_select.html" className="nav-link">Select</a></li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Buttons</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="datatable_extension_buttons_init.html" className="nav-link">Initialization</a></li>
                          <li className="nav-item"><a href="datatable_extension_buttons_flash.html" className="nav-link">Flash buttons</a></li>
                          <li className="nav-item"><a href="datatable_extension_buttons_print.html" className="nav-link">Print buttons</a></li>
                          <li className="nav-item"><a href="datatable_extension_buttons_html5.html" className="nav-link">HTML5 buttons</a></li>
                        </ul>
                      </li>
                      <li className="nav-item"><a href="datatable_extension_colvis.html" className="nav-link">Columns visibility</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-file-spreadsheet" /> <span>Handsontable</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Handsontable">
                      <li className="nav-item"><a href="handsontable_basic.html" className="nav-link">Basic configuration</a></li>
                      <li className="nav-item"><a href="handsontable_advanced.html" className="nav-link">Advanced setup</a></li>
                      <li className="nav-item"><a href="handsontable_cols.html" className="nav-link">Column features</a></li>
                      <li className="nav-item"><a href="handsontable_cells.html" className="nav-link">Cell features</a></li>
                      <li className="nav-item"><a href="handsontable_types.html" className="nav-link">Basic cell types</a></li>
                      <li className="nav-item"><a href="handsontable_custom_checks.html" className="nav-link">Custom &amp; checkboxes</a></li>
                      <li className="nav-item"><a href="handsontable_ac_password.html" className="nav-link">Autocomplete &amp; password</a></li>
                      <li className="nav-item"><a href="handsontable_search.html" className="nav-link">Search</a></li>
                      <li className="nav-item"><a href="handsontable_context.html" className="nav-link">Context menu</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-versions" /> <span>Responsive tables</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Responsive tables">
                      <li className="nav-item"><a href="table_responsive.html" className="nav-link">Responsive basic tables</a></li>
                      <li className="nav-item"><a href="datatable_responsive.html" className="nav-link">Responsive data tables</a></li>
                    </ul>
                  </li> */}
                  {/* /tables */}
                  {/* Page kits */}
                  {/* <li className="nav-item-header"><div className="text-uppercase font-size-xs line-height-xs">Page kits</div> <i className="icon-menu" title="Page kits" /></li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-grid6" /> <span>General pages</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="General pages">
                      <li className="nav-item"><a href="general_feed.html" className="nav-link">Feed</a></li>
                      <li className="nav-item"><a href="general_embeds.html" className="nav-link">Embeds</a></li>
                      <li className="nav-item"><a href="general_faq.html" className="nav-link">FAQ page</a></li>
                      <li className="nav-item"><a href="general_knowledgebase.html" className="nav-link">Knowledgebase</a></li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Blog</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="blog_classic_v.html" className="nav-link">Classic vertical</a></li>
                          <li className="nav-item"><a href="blog_classic_h.html" className="nav-link">Classic horizontal</a></li>
                          <li className="nav-item"><a href="blog_grid.html" className="nav-link">Grid</a></li>
                          <li className="nav-item"><a href="blog_single.html" className="nav-link">Single post</a></li>
                          <li className="nav-item-divider" />
                          <li className="nav-item"><a href="blog_sidebar_left.html" className="nav-link">Left sidebar</a></li>
                          <li className="nav-item"><a href="blog_sidebar_right.html" className="nav-link">Right sidebar</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Timelines</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="timelines_left.html" className="nav-link">Left timeline</a></li>
                          <li className="nav-item"><a href="timelines_right.html" className="nav-link">Right timeline</a></li>
                          <li className="nav-item"><a href="timelines_center.html" className="nav-link">Centered timeline</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Gallery</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="gallery_grid.html" className="nav-link">Media grid</a></li>
                          <li className="nav-item"><a href="gallery_titles.html" className="nav-link">Media with titles</a></li>
                          <li className="nav-item"><a href="gallery_description.html" className="nav-link">Media with description</a></li>
                          <li className="nav-item"><a href="gallery_library.html" className="nav-link">Media library</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-wrench3" /> <span>Service pages</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Service pages">
                      <li className="nav-item"><a href="service_sitemap.html" className="nav-link">Sitemap</a></li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Invoicing</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="invoice_template.html" className="nav-link">Invoice template</a></li>
                          <li className="nav-item"><a href="invoice_grid.html" className="nav-link">Invoice grid</a></li>
                          <li className="nav-item"><a href="invoice_archive.html" className="nav-link">Invoice archive</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Authentication</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="login_simple.html" className="nav-link">Simple login</a></li>
                          <li className="nav-item"><a href="login_advanced.html" className="nav-link">More login info</a></li>
                          <li className="nav-item"><a href="login_registration.html" className="nav-link">Simple registration</a></li>
                          <li className="nav-item"><a href="login_registration_advanced.html" className="nav-link">More registration info</a></li>
                          <li className="nav-item"><a href="login_unlock.html" className="nav-link">Unlock user</a></li>
                          <li className="nav-item"><a href="login_password_recover.html" className="nav-link">Reset password</a></li>
                          <li className="nav-item"><a href="login_hide_navbar.html" className="nav-link">Hide navbar</a></li>
                          <li className="nav-item"><a href="login_transparent.html" className="nav-link">Transparent box</a></li>
                          <li className="nav-item"><a href="login_background.html" className="nav-link">Background option</a></li>
                          <li className="nav-item"><a href="login_validation.html" className="nav-link">With validation</a></li>
                          <li className="nav-item"><a href="login_tabbed.html" className="nav-link">Tabbed form</a></li>
                          <li className="nav-item"><a href="login_modals.html" className="nav-link">Inside modals</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Error pages</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="error_403.html" className="nav-link">Error 403</a></li>
                          <li className="nav-item"><a href="error_404.html" className="nav-link">Error 404</a></li>
                          <li className="nav-item"><a href="error_405.html" className="nav-link">Error 405</a></li>
                          <li className="nav-item"><a href="error_500.html" className="nav-link">Error 500</a></li>
                          <li className="nav-item"><a href="error_503.html" className="nav-link">Error 503</a></li>
                          <li className="nav-item"><a href="error_offline.html" className="nav-link">Offline page</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-people" /> <span>User pages</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="User pages">
                      <li className="nav-item"><a href="user_pages_list.html" className="nav-link">User list</a></li>
                      <li className="nav-item"><a href="user_pages_cards.html" className="nav-link">User cards</a></li>
                      <li className="nav-item"><a href="user_pages_profile.html" className="nav-link">Simple profile</a></li>
                      <li className="nav-item"><a href="user_pages_profile_tabbed.html" className="nav-link">Tabbed profile</a></li>
                      <li className="nav-item"><a href="user_pages_profile_cover.html" className="nav-link">Profile with cover</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-cube3" /> <span>Application pages</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Application pages">
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Task manager</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="task_manager_grid.html" className="nav-link">Task grid</a></li>
                          <li className="nav-item"><a href="task_manager_list.html" className="nav-link">Task list</a></li>
                          <li className="nav-item"><a href="task_manager_detailed.html" className="nav-link">Task detailed</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Inbox</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="mail_list.html" className="nav-link">Mail list</a></li>
                          <li className="nav-item"><a href="mail_list_detached.html" className="nav-link">Mail list (detached)</a></li>
                          <li className="nav-item"><a href="mail_read.html" className="nav-link">Read mail</a></li>
                          <li className="nav-item"><a href="mail_write.html" className="nav-link">Write mail</a></li>
                          <li className="nav-item-divider" />
                          <li className="nav-item"><a href="chat_layouts.html" className="nav-link">Chat layouts</a></li>
                          <li className="nav-item"><a href="chat_options.html" className="nav-link">Chat options</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Search</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="search_basic.html" className="nav-link">Basic search results</a></li>
                          <li className="nav-item"><a href="search_users.html" className="nav-link">User search results</a></li>
                          <li className="nav-item"><a href="search_images.html" className="nav-link">Image search results</a></li>
                          <li className="nav-item"><a href="search_videos.html" className="nav-link">Video search results</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Job search</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="job_list_cards.html" className="nav-link">Cards view</a></li>
                          <li className="nav-item"><a href="job_list_list.html" className="nav-link">List view</a></li>
                          <li className="nav-item"><a href="job_detailed.html" className="nav-link">Job detailed</a></li>
                          <li className="nav-item"><a href="job_apply.html" className="nav-link">Apply</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Learning</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="learning_list.html" className="nav-link">List view</a></li>
                          <li className="nav-item"><a href="learning_grid.html" className="nav-link">Grid view</a></li>
                          <li className="nav-item"><a href="learning_detailed.html" className="nav-link">Detailed course</a></li>
                        </ul>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">Ecommerce set</a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item"><a href="ecommerce_product_list.html" className="nav-link">Product list</a></li>
                          <li className="nav-item"><a href="ecommerce_product_grid.html" className="nav-link">Product grid</a></li>
                          <li className="nav-item"><a href="ecommerce_orders_history.html" className="nav-link">Orders history</a></li>
                          <li className="nav-item"><a href="ecommerce_customers.html" className="nav-link">Customers</a></li>
                          <li className="nav-item"><a href="ecommerce_pricing.html" className="nav-link">Pricing tables</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link"><i className="icon-atom2" /> <span>Widgets</span></a>
                    <ul className="nav nav-group-sub" data-submenu-title="Widgets">
                      <li className="nav-item"><a href="widgets_content.html" className="nav-link">Content widgets</a></li>
                      <li className="nav-item"><a href="widgets_stats.html" className="nav-link">Statistics widgets</a></li>
                      <li className="nav-item"><a href="widgets_menu.html" className="nav-link disabled">Menu widgets <span className="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li>
                      <li className="nav-item"><a href="widgets_form.html" className="nav-link disabled">Form widgets <span className="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li>
                    </ul>
                  </li> */}
                  {/* /page kits */}
                </ul>
              </div>
              {/* /main navigation */}
            </div>
            {/* /sidebar content */}
          </div>
   </Fragment>
  )
}

export default SideBar
