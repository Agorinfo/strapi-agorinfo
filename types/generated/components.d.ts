import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentArchiveContent extends Schema.Component {
  collectionName: 'components_content_archive_contents';
  info: {
    displayName: 'archiveContent';
    icon: 'layer';
    description: '';
  };
  attributes: {
    teaser: Attribute.Text;
    text: Attribute.Blocks;
    label: Attribute.String;
    url: Attribute.String;
    reassuranceSolution: Attribute.Component<'content.content-block'>;
    cta: Attribute.Component<'content.call-to-action'>;
    images: Attribute.Media;
  };
}

export interface ContentArchiveRessources extends Schema.Component {
  collectionName: 'components_content_archive_ressources';
  info: {
    displayName: 'archiveRessources';
    description: '';
  };
  attributes: {
    text: Attribute.Blocks;
    image: Attribute.Media;
    metas: Attribute.Component<'seo.meta'>;
    cta: Attribute.Component<'section.call-to-action-image'>;
  };
}

export interface ContentCallToAction extends Schema.Component {
  collectionName: 'components_content_call_to_actions';
  info: {
    displayName: 'callToAction';
    icon: 'layout';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface ContentCardCollection extends Schema.Component {
  collectionName: 'components_content_card_collections';
  info: {
    displayName: 'cardCollection';
    icon: 'layout';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface ContentCardList extends Schema.Component {
  collectionName: 'components_content_card_lists';
  info: {
    displayName: 'CardList';
    icon: 'layout';
    description: '';
  };
  attributes: {
    tag: Attribute.String;
    color: Attribute.Enumeration<['bleu', 'bleu fonc\u00E9', 'violet']>;
    text: Attribute.Component<'content.cardlist-item', true>;
  };
}

export interface ContentCardlistItem extends Schema.Component {
  collectionName: 'components_content_cardlist_items';
  info: {
    displayName: 'cardlistItem';
    icon: 'layout';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface ContentContentBlock extends Schema.Component {
  collectionName: 'components_content_content_blocks';
  info: {
    displayName: 'contentBlock';
    icon: 'layout';
  };
  attributes: {
    teaser: Attribute.String;
    content: Attribute.Blocks;
    label1: Attribute.String;
    url1: Attribute.String;
    label2: Attribute.String;
    url2: Attribute.String;
  };
}

export interface ContentContentCard extends Schema.Component {
  collectionName: 'components_content_content_cards';
  info: {
    displayName: 'contentCard';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Blocks;
  };
}

export interface ContentCount extends Schema.Component {
  collectionName: 'components_content_counts';
  info: {
    displayName: 'count';
    icon: 'layer';
  };
  attributes: {
    number: Attribute.BigInteger;
    expertise: Attribute.String;
  };
}

export interface ContentDetails extends Schema.Component {
  collectionName: 'components_content_details';
  info: {
    displayName: 'details';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    detail: Attribute.Text;
  };
}

export interface ContentExpertise extends Schema.Component {
  collectionName: 'components_content_expertise';
  info: {
    displayName: 'expertise';
  };
  attributes: {
    icon: Attribute.Media;
    text: Attribute.Blocks;
  };
}

export interface ContentFeatureDetails extends Schema.Component {
  collectionName: 'components_content_feature_details';
  info: {
    displayName: 'featureDetails';
    icon: 'layer';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ContentFeatureTags extends Schema.Component {
  collectionName: 'components_content_feature_tags';
  info: {
    displayName: 'featureTags';
    icon: 'layer';
  };
  attributes: {
    tag: Attribute.String;
  };
}

export interface ContentFeaturedCard extends Schema.Component {
  collectionName: 'components_content_featured_cards';
  info: {
    displayName: 'featuredCard';
    icon: 'layout';
    description: '';
  };
  attributes: {
    icon: Attribute.Enumeration<
      [
        'medal',
        'user',
        'factory',
        'buildings',
        'mapPin',
        'signpost',
        'handshake',
        'listChecks',
        'certificate',
        'knife',
        'grains',
        'calculator',
        'storefront',
        'headset',
        'chatsTeardrop',
        'boardTeacher',
        'planet',
        'arrowLeft',
        'arrowRight',
        'instagram',
        'check',
        'bookmark',
        'hardDrives',
        'browsers',
        'lifebuoy',
        'numberOne',
        'numberTwo',
        'numberThree',
        'x',
        'caretDown',
        'caretUp',
        'desktopTower',
        'gear',
        'wrench',
        'leaf',
        'computerTower',
        'database',
        'checkCircle',
        'twitter',
        'linkedin',
        'youtube',
        'birthday',
        'burger',
        'business',
        'cloudData',
        'club',
        'comptinnov',
        'down',
        'group',
        'Lsa',
        'logiviande',
        'merge',
        'silos',
        'stepOne',
        'stepTwo',
        'stepThree',
        'stepFour',
        'team',
        'checklist',
        'listing',
        'poligon',
        'poligonTransparent',
        'triangle',
        'software',
        'support',
        'versioning'
      ]
    >;
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface ContentFeaturesList extends Schema.Component {
  collectionName: 'components_content_features_lists';
  info: {
    displayName: 'featuresList';
    icon: 'layer';
    description: '';
  };
  attributes: {
    version: Attribute.String;
    details: Attribute.Component<'content.feature-details', true>;
  };
}

export interface ContentInformationCard extends Schema.Component {
  collectionName: 'components_content_information_cards';
  info: {
    displayName: 'informationCard';
    icon: 'layout';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface ContentListCardItem extends Schema.Component {
  collectionName: 'components_content_list_card_items';
  info: {
    displayName: 'listCardItem';
    icon: 'layout';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface ContentListCard extends Schema.Component {
  collectionName: 'components_content_list_cards';
  info: {
    displayName: 'listCard';
    icon: 'layout';
    description: '';
  };
  attributes: {
    tag: Attribute.String;
    color: Attribute.Enumeration<['bleu', 'bleu fonc\u00E9', 'violet']>;
    item: Attribute.Component<'content.list-card-item', true>;
  };
}

export interface ContentListItem extends Schema.Component {
  collectionName: 'components_content_list_items';
  info: {
    displayName: 'listItem';
    icon: 'layout';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface ContentModuleList extends Schema.Component {
  collectionName: 'components_content_module_lists';
  info: {
    displayName: 'moduleList';
    icon: 'layout';
  };
  attributes: {
    listItem: Attribute.String;
  };
}

export interface ContentNavItems extends Schema.Component {
  collectionName: 'components_content_nav_items';
  info: {
    displayName: 'navItems';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    image: Attribute.Media;
    labelButton: Attribute.String;
    subNavItems: Attribute.Component<'content.sub-nav-items', true>;
  };
}

export interface ContentSocials extends Schema.Component {
  collectionName: 'components_content_socials';
  info: {
    displayName: 'socials';
    icon: 'manyToMany';
  };
  attributes: {
    social: Attribute.Enumeration<
      ['linkedin', 'instagram', 'facebook', 'twitter']
    >;
    url: Attribute.String;
  };
}

export interface ContentSolutionComp extends Schema.Component {
  collectionName: 'components_content_solution_comps';
  info: {
    displayName: 'solutionComp';
    icon: 'layer';
    description: '';
  };
  attributes: {
    solution: Attribute.Enumeration<
      ['logiviande', 'silos', 'lsa', 'comptinnov']
    >;
  };
}

export interface ContentStoryCard extends Schema.Component {
  collectionName: 'components_content_story_cards';
  info: {
    displayName: 'storyCard';
    icon: 'layer';
  };
  attributes: {
    icon: Attribute.Enumeration<
      ['cloudData', 'birthday', 'club', 'group', 'merge']
    >;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ContentSubNavItems extends Schema.Component {
  collectionName: 'components_content_sub_nav_items';
  info: {
    displayName: 'subNavItems';
    icon: 'alien';
    description: '';
  };
  attributes: {
    icon: Attribute.Enumeration<
      [
        'arrowLeft',
        'arrowRight',
        'birthday',
        'bookmarkSimple',
        'boardTeacher',
        'browsers',
        'buildings',
        'business',
        'calculator',
        'caretDown',
        'caretUp',
        'certificate',
        'chatsTeardrop',
        'check',
        'checkCircle',
        'checklist',
        'cloudData',
        'club',
        'comptinnov',
        'computerTower',
        'database',
        'down',
        'desktopTower',
        'factory',
        'gear',
        'grains',
        'group',
        'handshake',
        'hardDrives',
        'headset',
        'instagram',
        'lsa',
        'knife',
        'leaf',
        'lifebuoy',
        'linkedin',
        'listChecks',
        'listing',
        'logiviande',
        'mapPinLine',
        'medal',
        'merge',
        'numberOne',
        'numberThree',
        'numberTwo',
        'planet,',
        'signpost',
        'storefront',
        'silos',
        'software',
        'stepFour',
        'stepOne',
        'stepThree',
        'stepTwo',
        'support',
        'team',
        'twitter',
        'user',
        'versioning',
        'wrench',
        'x',
        'youtube'
      ]
    >;
    title: Attribute.String;
    description: Attribute.Text;
    url: Attribute.String;
  };
}

export interface ContentTable extends Schema.Component {
  collectionName: 'components_content_tables';
  info: {
    displayName: 'table';
    icon: 'layout';
  };
  attributes: {
    type: Attribute.String;
    employeeData: Attribute.Boolean;
    thirdPartyData: Attribute.Boolean;
  };
}

export interface ContentTestimonialCard extends Schema.Component {
  collectionName: 'components_content_testimonial_cards';
  info: {
    displayName: 'testimonialCard';
    icon: 'layout';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    company: Attribute.String;
    firstname: Attribute.String;
    name: Attribute.String;
    job: Attribute.String;
    avatar: Attribute.Media;
    testimonial: Attribute.Blocks;
  };
}

export interface ContentTitleList extends Schema.Component {
  collectionName: 'components_content_title_lists';
  info: {
    displayName: 'titleList';
    icon: 'layout';
  };
  attributes: {
    title: Attribute.String;
    listItem: Attribute.Component<'content.list-item', true>;
  };
}

export interface FaqFaqItem extends Schema.Component {
  collectionName: 'components_faq_faq_items';
  info: {
    displayName: 'faqItem';
  };
  attributes: {
    answer: Attribute.Text;
    response: Attribute.Text;
  };
}

export interface HeroHeroArchive extends Schema.Component {
  collectionName: 'components_hero_hero_archives';
  info: {
    displayName: 'heroArchive';
    icon: 'layout';
    description: '';
  };
  attributes: {
    teaser: Attribute.String;
    title: Attribute.String;
    logo: Attribute.Media;
    informationCard: Attribute.Component<'content.information-card'>;
    moduleList: Attribute.Component<'content.module-list', true>;
    label: Attribute.String;
    url: Attribute.String;
    badge: Attribute.String;
    icon: Attribute.Enumeration<
      [
        'medal',
        'user',
        'factory',
        'buildings',
        'mapPin',
        'signpost',
        'handshake',
        'listChecks',
        'certificate',
        'knife',
        'grains',
        'calculator',
        'storefront',
        'headset',
        'chatsTeardrop',
        'devices',
        'boardTeacher',
        'planet',
        'arrowLeft',
        'arrowRight',
        'instagram',
        'check',
        'bookmark',
        'hardDrives',
        'browsers',
        'lifebuoy',
        'numberOne',
        'numberTwo',
        'numberThree',
        'x',
        'caretDown',
        'caretUp',
        'desktopTower',
        'gear',
        'wrench',
        'leaf',
        'computerTower',
        'database',
        'checkCircle',
        'twitter',
        'linkedin',
        'youtube',
        'birthday',
        'burger',
        'business',
        'cloudData',
        'club',
        'comptinnov',
        'down',
        'group',
        'Lsa',
        'logiviande',
        'merge',
        'silos',
        'stepOne',
        'stepTwo',
        'stepThree',
        'stepFour',
        'team',
        'checklist',
        'listing',
        'poligon',
        'poligonTransparent',
        'triangle',
        'software',
        'support',
        'versioning'
      ]
    >;
    background: Attribute.Media;
  };
}

export interface HeroHeroService extends Schema.Component {
  collectionName: 'components_hero_hero_services';
  info: {
    displayName: 'heroService';
    icon: 'layout';
    description: '';
  };
  attributes: {
    icon: Attribute.Enumeration<
      ['chatsTeardrop', 'devices', 'boardTeacher', 'headset']
    >;
    title: Attribute.String;
    teaser: Attribute.Text;
    images: Attribute.Media;
    logo: Attribute.Media;
  };
}

export interface HeroHeroSlide extends Schema.Component {
  collectionName: 'components_hero_hero_slides';
  info: {
    displayName: 'HeroSlide';
    icon: 'layout';
    description: '';
  };
  attributes: {
    content: Attribute.Component<'content.content-block'>;
    images: Attribute.Media;
    logo: Attribute.Media;
  };
}

export interface SectionCallToActionImage extends Schema.Component {
  collectionName: 'components_section_call_to_action_images';
  info: {
    displayName: 'callToActionImage';
    icon: 'layout';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    label: Attribute.String;
    url: Attribute.String;
    image: Attribute.Media;
    background: Attribute.Enumeration<['bleu', 'bleu clair', 'gris']> &
      Attribute.Required &
      Attribute.DefaultTo<'bleu'>;
    position: Attribute.Enumeration<
      ['image \u00E0 gauche', 'image \u00E0 droite']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'image \u00E0 droite'>;
    document: Attribute.Media;
  };
}

export interface SectionCollection extends Schema.Component {
  collectionName: 'components_section_collections';
  info: {
    displayName: 'collection';
    icon: 'layout';
  };
  attributes: {
    title: Attribute.String;
    collectionsLink: Attribute.String;
    card: Attribute.Component<'content.card-collection', true>;
  };
}

export interface SectionExpertise extends Schema.Component {
  collectionName: 'components_section_expertise';
  info: {
    displayName: 'expertise';
    icon: 'layout';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    counter: Attribute.Component<'content.count', true>;
  };
}

export interface SectionFeatured extends Schema.Component {
  collectionName: 'components_section_featureds';
  info: {
    displayName: 'featured';
    icon: 'layout';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    teaser: Attribute.Text;
    card: Attribute.Component<'content.featured-card', true>;
  };
}

export interface SectionListByCategory extends Schema.Component {
  collectionName: 'components_section_list_by_categories';
  info: {
    displayName: 'listByCategory';
    icon: 'layout';
    description: '';
  };
  attributes: {
    Text: Attribute.Blocks;
    listCard: Attribute.Component<'content.list-card', true>;
  };
}

export interface SectionReassurance extends Schema.Component {
  collectionName: 'components_section_reassurances';
  info: {
    displayName: 'reassurance';
    icon: 'layout';
    description: '';
  };
  attributes: {
    text: Attribute.Blocks;
    label: Attribute.String;
    url: Attribute.String;
    images: Attribute.Media;
    callToAction: Attribute.Component<'content.call-to-action'>;
  };
}

export interface SectionStep extends Schema.Component {
  collectionName: 'components_section_steps';
  info: {
    displayName: 'step';
    icon: 'layout';
  };
  attributes: {
    icon: Attribute.Enumeration<
      [
        'medal',
        'user',
        'factory',
        'buildings',
        'mapPin',
        'signpost',
        'handshake',
        'listChecks',
        'certificate',
        'knife',
        'grains',
        'calculator',
        'storefront',
        'headset',
        'chatsTeardrop',
        'boardTeacher',
        'planet',
        'arrowLeft',
        'arrowRight',
        'instagram',
        'check',
        'bookmark',
        'hardDrives',
        'browsers',
        'lifebuoy',
        'numberOne',
        'numberTwo',
        'numberThree',
        'x',
        'caretDown',
        'caretUp',
        'desktopTower',
        'gear',
        'wrench',
        'leaf',
        'computerTower',
        'database',
        'checkCircle',
        'twitter',
        'linkedin',
        'youtube',
        'birthday',
        'burger',
        'business',
        'cloudData',
        'club',
        'comptinnov',
        'down',
        'group',
        'Lsa',
        'logiviande',
        'merge',
        'silos',
        'stepOne',
        'stepTwo',
        'stepThree',
        'stepFour',
        'team',
        'checklist',
        'listing',
        'poligon',
        'poligonTransparent',
        'triangle',
        'software',
        'support',
        'versioning'
      ]
    >;
    title: Attribute.String;
    text: Attribute.Text;
    url: Attribute.String;
  };
}

export interface SectionStory extends Schema.Component {
  collectionName: 'components_section_stories';
  info: {
    displayName: 'story';
    icon: 'layout';
  };
  attributes: {
    title: Attribute.String;
    storyCard: Attribute.Component<'content.story-card', true>;
  };
}

export interface SectionSupport extends Schema.Component {
  collectionName: 'components_section_supports';
  info: {
    displayName: 'support';
    icon: 'layout';
  };
  attributes: {
    image: Attribute.Media;
    content: Attribute.Component<'content.content-block'>;
  };
}

export interface SeoMeta extends Schema.Component {
  collectionName: 'components_seo_metas';
  info: {
    displayName: 'meta';
    icon: 'alien';
    description: '';
  };
  attributes: {
    meta_title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    meta_description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    shareImage: Attribute.Media & Attribute.Required;
    canonicalUrl: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.archive-content': ContentArchiveContent;
      'content.archive-ressources': ContentArchiveRessources;
      'content.call-to-action': ContentCallToAction;
      'content.card-collection': ContentCardCollection;
      'content.card-list': ContentCardList;
      'content.cardlist-item': ContentCardlistItem;
      'content.content-block': ContentContentBlock;
      'content.content-card': ContentContentCard;
      'content.count': ContentCount;
      'content.details': ContentDetails;
      'content.expertise': ContentExpertise;
      'content.feature-details': ContentFeatureDetails;
      'content.feature-tags': ContentFeatureTags;
      'content.featured-card': ContentFeaturedCard;
      'content.features-list': ContentFeaturesList;
      'content.information-card': ContentInformationCard;
      'content.list-card-item': ContentListCardItem;
      'content.list-card': ContentListCard;
      'content.list-item': ContentListItem;
      'content.module-list': ContentModuleList;
      'content.nav-items': ContentNavItems;
      'content.socials': ContentSocials;
      'content.solution-comp': ContentSolutionComp;
      'content.story-card': ContentStoryCard;
      'content.sub-nav-items': ContentSubNavItems;
      'content.table': ContentTable;
      'content.testimonial-card': ContentTestimonialCard;
      'content.title-list': ContentTitleList;
      'faq.faq-item': FaqFaqItem;
      'hero.hero-archive': HeroHeroArchive;
      'hero.hero-service': HeroHeroService;
      'hero.hero-slide': HeroHeroSlide;
      'section.call-to-action-image': SectionCallToActionImage;
      'section.collection': SectionCollection;
      'section.expertise': SectionExpertise;
      'section.featured': SectionFeatured;
      'section.list-by-category': SectionListByCategory;
      'section.reassurance': SectionReassurance;
      'section.step': SectionStep;
      'section.story': SectionStory;
      'section.support': SectionSupport;
      'seo.meta': SeoMeta;
    }
  }
}
