
/*
 * Definition of effects
 */
var effects = {
  ReplaceContent: [
    {
      type: 'MakeVisible',
      element: 'ReplaceContent'
    },
    {
      type: 'ReplaceContent',
      content: '<span style="background-color: yellow"> Oh , you just replaced me ! Too bad !</span>',
      element: 'ReplaceContent'
    }
  ],
  AppendContent: [
    {
      type: 'MakeVisible',
      element: 'AppendContent'
    },
    {
      type: 'AppendContent',
      content: '<span style="background-color: yellow">Appended content here<br /></span>',
      element: 'AppendContent'
    }
  ],
  PrependContent: [
    {
      type: 'MakeVisible',
      element: 'PrependContent'
    },
    {
      type: 'PrependContent',
      content: '<span style="background-color: yellow">Prepended content here<br /></span>',
      element: 'PrependContent'
    }
  ],
  'Emphasize-circle': [
    {
      type: 'MakeVisible',
      element: 'Emphasize-circle'
    },
    {
      type: 'ReplaceContent',
      content: '<span id="Emphasize circle">Emphasize circle</span>',
      element: 'Emphasize-circle'
    },
    {
      type: 'Emphasize',
      method: 'circle',
//			lineWidth: 10,
//			opacity: 0.5,
//			strokeStyle: 'red',
//			duration: 1,
      element: 'Emphasize circle'
    }
  ],
  'Emphasize-underline': [
    {
      type: 'MakeVisible',
      element: 'Emphasize-underline'
    },
    {
      type: 'ReplaceContent',
      content: '<span id="Emphasize underline">Emphasize underline</span>',
      element: 'Emphasize-underline'
    },
    {
      type: 'Emphasize',
      method: 'underline',
//			lineWidth: 4,
//			opacity: 0.5,
//			strokeStyle: '#0000ff',
//			duration: 1,
      element: 'Emphasize underline'
    }
  ],
  'Emphasize-double-underline': [
    {
      type: 'MakeVisible',
      element: 'Emphasize-double-underline'
    },
    {
      type: 'ReplaceContent',
      content: '<span id="Emphasize double-underline">Emphasize double-underline</span>',
      element: 'Emphasize-double-underline'
    },
    {
      type: 'Emphasize',
      method: 'double-underline',
//			lineWidth: 4,
//			opacity: 0.5,
//			strokeStyle: '#0000ff',
//			duration: 1,
      element: 'Emphasize double-underline'
    }
  ],
  'FadeIn': [
    {
      type: 'MakeVisible',
      element: 'FadeIn'
    },
    {
      type: 'ReplaceContent',
      content: '<span id="Fade In" style="background-color: yellow">Fade In</span>',
      element: 'FadeIn'
    },
    {
      type: 'FadeIn',
//			visibility: 'visible',
//			duration: 1,
      element: 'Fade In'
    }
  ],
  'FadeOut': [
    {
      type: 'MakeVisible',
      element: 'FadeOut'
    },
    {
      type: 'ReplaceContent',
      content: '<span id="Fade Out" style="background-color: yellow">Fade Out</span>',
      element: 'FadeOut'
    },
    {
      type: 'FadeOut',
//			visibility: 'visible',
//			duration: 1,
      element: 'Fade Out'
    }
  ],
  'ProgressNumber': [
    {
      type: 'MakeVisible',
      element: 'ProgressNumber'
    },
    {
      type: 'ReplaceContent',
      content: 'Progress Number <span id="Progress Number">0</span>',
      element: 'ProgressNumber'
    },
    {
      type: 'ProgressNumber',
      start: 0,
      end: 5000,
      duration: 5,
      element: 'Progress Number'
    }
  ],
  'SlideIn': [
    {
      type: 'MakeVisible',
      element: 'SlideIn'
    },
    {
      type: 'ReplaceContent',
      content: '<div id="Slide In">Slide In</div>',
      element: 'SlideIn'
    },
    {
      type: 'SlideIn',
      edge: 'right',
//			duration: 1,
      element: 'Slide In'
    }
  ],
  'SlideOut': [
    {
      type: 'MakeVisible',
      element: 'SlideOut'
    },
    {
      type: 'ReplaceContent',
      content: '<div id="Slide Out">Slide Out</div>',
      element: 'SlideOut'
    },
    {
      type: 'SlideOut',
      edge: 'right',
//			duration: 1,
      element: 'Slide Out'
    }
  ]
};

// -->
