import {
    CONNECTED_DEVICE_TYPES,
    SIZE_AREA_COVERAGE,
    NETWORK_USAGE,
    OUTDOOR_COVERAGE,
    SUPPORT_HIGH_POWERED,
    PRODUCT_TYPES,
    SUPPORT_WIFI_6_DEVICES
} from 'common/constant';

export const professionalOffice = {
    [CONNECTED_DEVICE_TYPES.ONE_TO_FIFTY]: {
        [SIZE_AREA_COVERAGE.SMALL]: {
            [NETWORK_USAGE.LIGHT]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07W7CBKZG',
                            'B07VMT8WK5'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07W7CBKZG',
                            'B07VMT8WK5'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07W7CBKZG',
                            'B07VMT8WK5'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07W7CBKZG',
                            'B07VMT8WK5'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            },
            [NETWORK_USAGE.MODERATE]: {
                [SUPPORT_WIFI_6_DEVICES.YES]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                },
                [SUPPORT_WIFI_6_DEVICES.NO]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                }
            },
            [NETWORK_USAGE.HIGH]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            }
        },
        [SIZE_AREA_COVERAGE.MEDIUM]: {
            [NETWORK_USAGE.LIGHT]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            },
            [NETWORK_USAGE.MODERATE]: {
                [SUPPORT_WIFI_6_DEVICES.YES]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                },
                [SUPPORT_WIFI_6_DEVICES.NO]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                }
            },
            [NETWORK_USAGE.HIGH]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            }
        },
        [SIZE_AREA_COVERAGE.LARGE]: {
            [NETWORK_USAGE.LIGHT]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            },
            [NETWORK_USAGE.MODERATE]: {
                [SUPPORT_WIFI_6_DEVICES.YES]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                },
                [SUPPORT_WIFI_6_DEVICES.NO]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                }
            },
            [NETWORK_USAGE.HIGH]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            }
        }
    },
    [CONNECTED_DEVICE_TYPES.FIFTY_TO_HUNDRED]: {
        [SIZE_AREA_COVERAGE.SMALL]: {
            [NETWORK_USAGE.LIGHT]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07W7CBKZG',
                            'B07VMT8WK5'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07W7CBKZG',
                            'B07VMT8WK5'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07W7CBKZG',
                            'B07VMT8WK5'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07W7CBKZG',
                            'B07VMT8WK5'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            },
            [NETWORK_USAGE.MODERATE]: {
                [SUPPORT_WIFI_6_DEVICES.YES]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                },
                [SUPPORT_WIFI_6_DEVICES.NO]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                }
            },
            [NETWORK_USAGE.HIGH]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            }
        },
        [SIZE_AREA_COVERAGE.MEDIUM]: {
            [NETWORK_USAGE.LIGHT]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            },
            [NETWORK_USAGE.MODERATE]: {
                [SUPPORT_WIFI_6_DEVICES.YES]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                },
                [SUPPORT_WIFI_6_DEVICES.NO]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                }
            },
            [NETWORK_USAGE.HIGH]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            }
        },
        [SIZE_AREA_COVERAGE.LARGE]: {
            [NETWORK_USAGE.LIGHT]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            },
            [NETWORK_USAGE.MODERATE]: {
                [SUPPORT_WIFI_6_DEVICES.YES]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                },
                [SUPPORT_WIFI_6_DEVICES.NO]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                }
            },
            [NETWORK_USAGE.HIGH]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            }
        }
    },
    [CONNECTED_DEVICE_TYPES.HUNDRED_PLUS]: {
        [SIZE_AREA_COVERAGE.SMALL]: {
            [NETWORK_USAGE.LIGHT]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07W7CBKZG',
                            'B07VMT8WK5'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07W7CBKZG',
                            'B07VMT8WK5'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07W7CBKZG',
                            'B07VMT8WK5'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07W7CBKZG',
                            'B07VMT8WK5'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            },
            [NETWORK_USAGE.MODERATE]: {
                [SUPPORT_WIFI_6_DEVICES.YES]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                },
                [SUPPORT_WIFI_6_DEVICES.NO]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                }
            },
            [NETWORK_USAGE.HIGH]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            }
        },
        [SIZE_AREA_COVERAGE.MEDIUM]: {
            [NETWORK_USAGE.LIGHT]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            },
            [NETWORK_USAGE.MODERATE]: {
                [SUPPORT_WIFI_6_DEVICES.YES]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                },
                [SUPPORT_WIFI_6_DEVICES.NO]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                }
            },
            [NETWORK_USAGE.HIGH]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            }
        },
        [SIZE_AREA_COVERAGE.LARGE]: {
            [NETWORK_USAGE.LIGHT]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            },
            [NETWORK_USAGE.MODERATE]: {
                [SUPPORT_WIFI_6_DEVICES.YES]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B08FBMF85D'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B08FBMF85D'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                },
                [SUPPORT_WIFI_6_DEVICES.NO]: {
                    [OUTDOOR_COVERAGE.YES]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07VSX7HQS'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    },
                    [OUTDOOR_COVERAGE.NO]: {
                        [SUPPORT_HIGH_POWERED.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                        },
                        [SUPPORT_HIGH_POWERED.NO]: {
                            [PRODUCT_TYPES.RECOMMENDED]: ['B07VSX7HQS'],
                            [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                        }
                    }
                }
            },
            [NETWORK_USAGE.HIGH]: {
                [OUTDOOR_COVERAGE.YES]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: [
                            'B07V7T29SS',
                            'B07V8SPR24'
                        ],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                },
                [OUTDOOR_COVERAGE.NO]: {
                    [SUPPORT_HIGH_POWERED.YES]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09JVZR5NM', 'B09JVYYKT4']
                    },
                    [SUPPORT_HIGH_POWERED.NO]: {
                        [PRODUCT_TYPES.RECOMMENDED]: ['B07V8SPR24'],
                        [PRODUCT_TYPES.SWITCH]: ['B09NN5PDFF', 'B08BZFJTRV']
                    }
                }
            }
        }
    }
};
