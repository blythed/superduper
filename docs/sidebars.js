// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  useCasesSidebar: [{
    type: 'autogenerated', dirName: 'use_cases'
  }],
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Welcome',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Get started',
      collapsed: true,
      collapsible: true,
      items: [
        'get_started/installation',
        'get_started/configuration',
        'get_started/environment',
      ],
      link: {
        type: 'doc',
        id: 'get_started/first_steps',
      },
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: {
        type: 'doc',
        id: 'tutorials/intro',
      },
      items: [
        'tutorials/vector_search',
        'tutorials/listening',
        'tutorials/training',
      ]
    },
    {
      type: 'category',
      label: 'Core API',
      link: {
        type: 'doc',
        id: 'core_api/intro',
      },
      items: [
        'core_api/connect',
        'core_api/apply',
        'core_api/execute',
      ]
    },
    {
      type: 'category',
      label: 'Apply API',
      link: {
        type: 'doc',
        id: 'apply_api/component',
      },
      items: [
        'apply_api/model',
        'apply_api/listener',
        'apply_api/vector_index',
        'apply_api/stack',
        'apply_api/datatype',
        'apply_api/schema',
        'apply_api/table',
        'apply_api/dataset',
        'apply_api/metric',
        'apply_api/validation',
        'apply_api/trainer',
      ]
    },
    {
      type: 'category',
      label: 'Execute API',
      link: {
        type: 'doc',
        id: 'execute_api/overview',
      },
      items: [
        {
          type: 'category',
          label: 'Inserting data',
          link: {
            type: 'doc',
            id: 'execute_api/inserting_data',
          },
          items: [
            'execute_api/basic_insertion',
            'execute_api/data_encodings_and_schemas',
            'execute_api/using_hybrid_storage_to_handle_large_data_blobs',
            'execute_api/referring_to_data_from_diverse_sources',
          ]
        },
        {
          type: 'category',
          label: 'Selecting data',
          link: {
            type: 'doc',
            id: 'execute_api/select_queries',
          },
          items: [
            'execute_api/mongodb_queries',
            'execute_api/sql_queries',
          ]
        },
        {
          type: 'category',
          label: 'Vector search',
          link: {
            type: 'doc',
            id: 'execute_api/vector_search',
          },
          items: [
            'execute_api/setting_up_vector_search',
            'execute_api/vector_search_queries',
            'execute_api/native_vector_search',
            'execute_api/sidecar_index_vector_search',
          ]
        },
        'execute_api/update_queries',
        'execute_api/delete_queries',
        'execute_api/predictions',
      ]
    },
    {
      type: 'category',
      label: 'Models',
      link: {
        type: 'doc',
        id: 'models/overview',
      },
      items: [
        'models/key_methods',
        'models/daemonizing_models_with_listeners',
        'models/linking_interdependent_models',
        'models/training_models',
        'models/evaluating_models',
        'models/llms',
        'models/embeddings',
        'models/bring_your_own_models',
      ]
    },
    {
      type: 'category',
      label: 'Reusable snippets',
      collapsed: true,
      collapsible: true,
      items: [
        'reusable_snippets/connect_to_superduperdb',
        'reusable_snippets/create_datatype',
        'reusable_snippets/get_useful_sample_data',
        'reusable_snippets/insert_data',
        'reusable_snippets/compute_features',
        'reusable_snippets/build_text_embedding_model',
        'reusable_snippets/build_image_embedding_model',
        'reusable_snippets/build_multimodal_embedding_models',
        'reusable_snippets/build_llm',
        'reusable_snippets/create_vector_index',
        'reusable_snippets/perform_a_vector_search',
        'reusable_snippets/connecting_listeners',
        'reusable_snippets/build_and_train_classifier',
      ],
      link: {
        type: 'generated-index',
        description: 'Common patterns for quick use',
      },
    },
    {
      type: 'category',
      label: 'Data integrations',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'data_integrations/intro',
      },
      items: [
        'data_integrations/mongodb',
        {
          type: 'category',
          label: 'SQL Databases',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'data_integrations/sql',
          },
          items: [
            'data_integrations/mysql',
            'data_integrations/postgresql',
            'data_integrations/snowflake',
            'data_integrations/sqlite',
            'data_integrations/duckdb',
          ]
        },
        'data_integrations/pandas', 
      ]
    },
    {
      type: 'category',
      label: 'AI integrations',
      collapsed: false,
      link:{
        type: 'generated-index',
        title: 'AI Integrations',
        description:
          "Learn more about our AI Integrations which consists of AI models, AI APIs and Frameworks",
      },
      items: [
        'ai_integrations/anthropic',
        'ai_integrations/cohere',
        'ai_integrations/custom',
        'ai_integrations/jina',
        'ai_integrations/llama_cpp',
        'ai_integrations/openai',
        'ai_integrations/pytorch',
        'ai_integrations/sentence_transformers',
        'ai_integrations/sklearn',
        'ai_integrations/transformers',
        'ai_integrations/vllm',
      ]
      
    },
    {
      type: 'category',
      label: 'Fundamentals',
      link: {
        type: 'doc',
        id: 'fundamentals/overview',
      },
      items: [
        'fundamentals/class_hierarchy',
        'fundamentals/design',
        'fundamentals/datalayer_overview',
        'fundamentals/data_transmision',
        'fundamentals/vector_search_algorithm',
      ]
    },
    {
      type: 'category',
      label: 'Production features',
      link: {
        type: 'doc',
        id: 'production/overview',
      },
      items: [
        'production/development_vs_cluster_mode',
        'production/command_line_interface',
        'production/change_data_capture',
        'production/yaml_formalism',
        'production/rest_api',
        'production/non_blocking_ray_jobs',
        'production/vector_comparison_service',
      ],
    },
    {
      type: 'category',
      label: 'API',
      collapsed: true,
      collapsible: true,
      items: [{ type: 'autogenerated', dirName: 'api' }],
      link: {
        type: 'generated-index',
        description:
          'Inline documentation of the SuperDuperDB Python API',
      },
    },
    {
      type: 'category',
      label: 'Use cases',
      collapsed: true,
      collapsible: true,
      items: [{ type: 'autogenerated', dirName: 'use_cases' }],
      link: {
        type: 'generated-index',
        description:
          'Common and useful use-cases implemented in SuperDuperDB with a walkthrough',
      },
    },

    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'link',
          label: 'Change log',
          href: 'https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/CHANGELOG.md',
        },
        {
          type: 'link',
          label: 'Source on GitHub',
          href: 'https://github.com/SuperDuperDB/superduperdb', 
        },
      ],
    },
  ],
};

module.exports = sidebars;